"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Introduce tu nombre."),
  email: z.string().trim().email("Introduce un email válido."),
  phone: z
    .string()
    .trim()
    .regex(
      /^(?:(?:\+34|0034)(?:[ .]|-)?)?[6789]\d{2}(?:[ .]|-)?\d{3}(?:[ .]|-)?\d{3}$/,
      "Introduce un teléfono español válido.",
    ),
  bodyArea: z.string().trim().max(120, "La zona del cuerpo es demasiado larga.").optional(),
  style: z.string().trim().max(120, "El estilo es demasiado largo.").optional(),
  availability: z.string().trim().max(120, "La disponibilidad es demasiado larga.").optional(),
  message: z.string().trim().min(10, "Cuéntanos un poco más sobre tu idea."),
  consent: z.literal("on", {
    message: "Necesitamos tu consentimiento para responderte.",
  }),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

function requiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function field(label: string, value?: string) {
  return `<p><strong>${label}:</strong> ${escapeHtml(value || "No indicado")}</p>`;
}

export async function submitContact(
  previousState: ContactFormState = initialState,
  formData: FormData,
): Promise<ContactFormState> {
  void previousState;
  const parsed = contactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisa los campos marcados antes de enviar la consulta.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const host = requiredEnv("SMTP_HOST");
    const port = Number(requiredEnv("SMTP_PORT"));
    if (port !== 465 && port !== 587) {
      throw new Error("SMTP_PORT must be 465 or 587.");
    }

    const smtpUser = requiredEnv("SMTP_USER");
    const smtpPassword = requiredEnv("SMTP_PASS");
    const sender = requiredEnv("SMTP_FROM_EMAIL");
    const recipient = requiredEnv("CONTACT_EMAIL_TO");
    const studioReplyTo = requiredEnv("CONTACT_EMAIL_REPLY_TO");
    const studioName = process.env.SMTP_FROM_NAME || "Sundemon Tattoo Studio";
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      requireTLS: port === 587,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
    const { name, email, phone, bodyArea, style, availability, message } = parsed.data;
    const safeName = name.replace(/[\r\n]+/g, " ");
    const from = `${studioName} <${sender}>`;

    await transporter.sendMail({
      from,
      to: recipient,
      replyTo: email,
      subject: `Nueva reserva recibida desde la web - ${safeName}`,
      html: `
        <h1>Nueva consulta de reserva</h1>
        ${field("Nombre", name)}
        ${field("Email", email)}
        ${field("Teléfono", phone)}
        ${field("Zona del cuerpo", bodyArea)}
        ${field("Estilo o referencias", style)}
        ${field("Disponibilidad", availability)}
        ${field("Idea y detalles", message)}
      `,
    });

    await transporter.sendMail({
      from,
      to: email,
      replyTo: studioReplyTo,
      subject: "Confirmación de tu reserva con Sundemon",
      html: `
        <h1>Gracias por escribirnos, ${escapeHtml(name)}</h1>
        <p>Hemos recibido tu consulta correctamente.</p>
        <p>Nos pondremos en contacto contigo en un plazo máximo de 48 horas.</p>
        <p>Un saludo,<br />${escapeHtml(studioName)}</p>
      `,
    });

    return {
      status: "success",
      message: "Consulta enviada. Nos pondremos en contacto contigo en un plazo máximo de 48 horas.",
    };
  } catch (error) {
    console.error("Unable to submit contact form", error);

    return {
      status: "error",
      message: "No hemos podido enviar la consulta. Inténtalo de nuevo o escríbenos directamente.",
    };
  }
}
