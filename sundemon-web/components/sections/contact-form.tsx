"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="font-sans text-sm text-earth-700">
          Nombre completo *
          <input name="name" required autoComplete="name" className="mt-2 w-full rounded-lg border border-sand-300 bg-white-warm px-4 py-3 text-sm outline-none focus:border-copper-500 focus:ring-2 focus:ring-copper-500/30" />
          {state.fieldErrors?.name ? <span className="mt-1 block text-xs text-earth-500">{state.fieldErrors.name[0]}</span> : null}
        </label>
        <label className="font-sans text-sm text-earth-700">
          Email *
          <input name="email" type="email" required autoComplete="email" className="mt-2 w-full rounded-lg border border-sand-300 bg-white-warm px-4 py-3 text-sm outline-none focus:border-copper-500 focus:ring-2 focus:ring-copper-500/30" />
          {state.fieldErrors?.email ? <span className="mt-1 block text-xs text-earth-500">{state.fieldErrors.email[0]}</span> : null}
        </label>
        <label className="font-sans text-sm text-earth-700">
          Teléfono / WhatsApp *
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern="(?:(?:\+34|0034)[ .-]?)?[6789][0-9]{2}[ .-]?[0-9]{3}[ .-]?[0-9]{3}"
            title="Introduce un teléfono español válido, por ejemplo 612 345 678."
            className="mt-2 w-full rounded-lg border border-sand-300 bg-white-warm px-4 py-3 text-sm outline-none focus:border-copper-500 focus:ring-2 focus:ring-copper-500/30"
          />
          {state.fieldErrors?.phone ? <span className="mt-1 block text-xs text-earth-500">{state.fieldErrors.phone[0]}</span> : null}
        </label>
        <label className="font-sans text-sm text-earth-700">
          Zona del cuerpo
          <input name="bodyArea" className="mt-2 w-full rounded-lg border border-sand-300 bg-white-warm px-4 py-3 text-sm outline-none focus:border-copper-500 focus:ring-2 focus:ring-copper-500/30" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="font-sans text-sm text-earth-700">
          Estilo o referencias
          <input name="style" placeholder="Fine line, botánico..." className="mt-2 w-full rounded-lg border border-sand-300 bg-white-warm px-4 py-3 text-sm outline-none focus:border-copper-500 focus:ring-2 focus:ring-copper-500/30" />
        </label>
        <label className="font-sans text-sm text-earth-700">
          Disponibilidad
          <input name="availability" placeholder="Días y horarios preferidos" className="mt-2 w-full rounded-lg border border-sand-300 bg-white-warm px-4 py-3 text-sm outline-none focus:border-copper-500 focus:ring-2 focus:ring-copper-500/30" />
        </label>
      </div>
      <label className="block font-sans text-sm text-earth-700">
        Cuéntanos tu idea *
        <textarea name="message" required rows={5} className="mt-2 w-full resize-y rounded-lg border border-sand-300 bg-white-warm px-4 py-3 text-sm outline-none focus:border-copper-500 focus:ring-2 focus:ring-copper-500/30" />
        {state.fieldErrors?.message ? <span className="mt-1 block text-xs text-earth-500">{state.fieldErrors.message[0]}</span> : null}
      </label>
      <label className="flex items-start gap-3 font-sans text-xs leading-5 text-ink-900/65">
        <input name="consent" type="checkbox" required className="mt-1 accent-earth-700" />
        <span>Acepto que Sundemon use estos datos para responder a mi consulta. *</span>
      </label>
      {state.message ? (
        <p role="status" className={state.status === "success" ? "text-sm text-earth-700" : "text-sm text-earth-500"}>
          {state.message}
        </p>
      ) : null}
      <button type="submit" disabled={isPending} className="w-full rounded-full bg-earth-700 px-6 py-3.5 font-sans text-sm font-semibold text-white-warm transition-colors hover:bg-earth-500 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-copper-500">
        {isPending ? "Enviando consulta..." : "Enviar propuesta ↗"}
      </button>
    </form>
  );
}
