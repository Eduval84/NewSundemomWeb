"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Introduce tu nombre."),
  email: z.string().trim().email("Introduce un email válido."),
  phone: z.string().trim().max(30, "El teléfono es demasiado largo.").optional(),
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
    const apiKey = requiredEnv("RESEND_API_KEY");
    const recipient = requiredEnv("RESEND_CONTACT_EMAIL");
    const sender = requiredEnv("RESEND_FROM_EMAIL");
    const studioName = process.env.RESEND_FROM_NAME || "Sundemon Tattoo Studio";
    const resend = new Resend(apiKey);
    const { name, email, phone, bodyArea, style, availability, message } = parsed.data;

    const internalEmail = await resend.emails.send({
      from: `${studioName} <${sender}>`,
      to: [recipient],
      replyTo: email,
      subject: `[RESERVAS] Consulta para ${name}`,
      html: `
        <h1>Nueva consulta de reserva</h1>
        ${field("Nombre", name)}
        ${field("Email", email)}
        ${field("Teléfono / WhatsApp", phone)}
        ${field("Zona del cuerpo", bodyArea)}
        ${field("Estilo o referencias", style)}
        ${field("Disponibilidad", availability)}
        ${field("Idea y detalles", message)}
      `,
    });

    if (internalEmail.error) {
      throw new Error(`Internal email failed: ${internalEmail.error.message}`);
    }

    const confirmationEmail = await resend.emails.send({
      from: `${studioName} <${sender}>`,
      to: [email],
      subject: "Hemos recibido tu consulta | Sundemon Tattoo Studio",
      html: `
        <h1>Gracias por escribirnos, ${escapeHtml(name)}</h1>
        <p>Hemos recibido tu consulta correctamente.</p>
        <p>Nos pondremos en contacto contigo en un plazo máximo de 72 horas.</p>
        <p>Un saludo,<br />${escapeHtml(studioName)}</p>
      `,
    });

    if (confirmationEmail.error) {
      throw new Error(`Confirmation email failed: ${confirmationEmail.error.message}`);
    }

    return {
      status: "success",
      message: "Consulta enviada. Nos pondremos en contacto contigo en un plazo máximo de 72 horas.",
    };
  } catch (error) {
    console.error("Unable to submit contact form", error);

    return {
      status: "error",
      message: "No hemos podido enviar la consulta. Inténtalo de nuevo o escríbenos directamente.",
    };
  }
}
