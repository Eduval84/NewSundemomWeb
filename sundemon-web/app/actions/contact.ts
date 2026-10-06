"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import { absoluteUrl } from "@/lib/seo";

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

const sender = '"Sundemom Tattoo Studio" <reservas@sundemom.es>';

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

    await transporter.sendMail({
      from: sender,
      to: "sundemomspace@gmail.com",
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
      from: sender,
      to: email,
      replyTo: "reservas@sundemom.es",
      subject: "Confirmación de tu reserva con Sundemon",
      text: `Hola, ${name}:

Hemos recibido correctamente tu consulta para Sundemom Tattoo Studio.
Nos pondremos en contacto contigo en un plazo máximo de 48 horas.

Mientras tanto, puedes descubrir nuestros estilos en ${absoluteUrl("/tatuajes")}.

Un saludo,
Sundemom Tattoo Studio
reservas@sundemom.es`,
      html: `
        <div style="margin:0;background-color:#f2ede3;padding:32px 12px;font-family:Arial,Helvetica,sans-serif;color:#28271f;">
          <span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden;">Hemos recibido tu consulta. Nos pondremos en contacto contigo en un plazo máximo de 48 horas.</span>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
            <tr>
              <td align="center">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;border:1px solid #e4d9c7;border-radius:12px;background-color:#fffdf9;border-collapse:separate;">
                  <tr>
                    <td align="center" style="padding:26px 24px 20px;border-bottom:1px solid #e9e0d2;background-color:#faf7f1;">
                      <img src="${absoluteUrl("/images/logo.png")}" width="160" alt="Sundemom Tattoo Studio" style="display:block;width:160px;max-width:100%;height:auto;border:0;margin:0 auto;" />
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:32px 30px 12px;">
                      <p style="margin:0 0 10px;font-size:11px;font-weight:bold;letter-spacing:2px;color:#a77b39;text-transform:uppercase;">Gracias por escribirnos</p>
                      <h1 style="margin:0;font-size:26px;line-height:1.3;font-weight:normal;color:#30483b;">Hola, ${escapeHtml(name)}</h1>
                      <p style="margin:18px 0 0;font-size:16px;line-height:1.7;color:#4c4a42;">Hemos recibido correctamente tu consulta para <strong>Sundemom Tattoo Studio</strong>.</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 30px 8px;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;background-color:#f6f2e9;border-left:4px solid #9dad63;">
                        <tr>
                          <td style="padding:16px 18px;">
                            <p style="margin:0 0 6px;font-size:15px;font-weight:bold;color:#30483b;">¿Qué ocurre ahora?</p>
                            <p style="margin:0;font-size:14px;line-height:1.7;color:#4c4a42;">Revisaremos tu idea y nos pondremos en contacto contigo en un plazo máximo de 48 horas.</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding:24px 30px 30px;">
                      <a href="${absoluteUrl("/tatuajes")}" style="display:inline-block;padding:13px 24px;border-radius:24px;background-color:#30483b;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;">Descubre nuestros estilos</a>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding:18px 24px;border-top:1px solid #e9e0d2;background-color:#faf7f1;">
                      <p style="margin:0;font-size:12px;line-height:1.6;color:#777267;">Sundemom Tattoo Studio · Alcalá de Henares</p>
                      <p style="margin:4px 0 0;font-size:12px;"><a href="${absoluteUrl("/")}" style="color:#536c4b;text-decoration:underline;">sundemom.es</a></p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
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
