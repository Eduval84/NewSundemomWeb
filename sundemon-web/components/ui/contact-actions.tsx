"use client";

import { useState } from "react";

const phoneNumber = "656925570";
const formattedPhone = "656 925 570";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 4.75A1.75 1.75 0 0 1 6.75 3h1.5A1.75 1.75 0 0 1 10 4.75v1.5A1.75 1.75 0 0 1 8.25 8H7.5a12.5 12.5 0 0 0 8.5 8.5v-.75A1.75 1.75 0 0 1 17.75 14h1.5A1.75 1.75 0 0 1 21 15.75v1.5A1.75 1.75 0 0 1 19.25 19C11.38 19 5 12.62 5 4.75Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 7 6.35 5.05a1.85 1.85 0 0 0 2.3 0L19.5 7" />
    </svg>
  );
}

export function PhoneAction() {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:+34${phoneNumber}`;
      return;
    }

    void navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex items-center gap-2 whitespace-nowrap font-sans text-[10px] font-semibold text-ink-900 transition-colors hover:text-earth-500 focus-visible:outline-2 focus-visible:outline-copper-500 sm:text-xs"
      aria-label="Copiar teléfono del estudio"
    >
      <PhoneIcon />
      {copied ? "Copiado" : formattedPhone}
    </button>
  );
}

export function EmailAction() {
  return (
    <a
      href="mailto:sundemomspace@gmail.com"
      className="flex items-center gap-2 whitespace-nowrap font-sans text-[10px] font-semibold text-ink-900 transition-colors hover:text-earth-500 focus-visible:outline-2 focus-visible:outline-copper-500 sm:text-xs"
    >
      <EmailIcon />
      sundemomspace@gmail.com
    </a>
  );
}
