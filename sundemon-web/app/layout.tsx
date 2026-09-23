import type { Metadata } from "next";
import { Manrope, Prata } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Sundemon Tattoo Studio | Tatuajes en Alcalá de Henares",
    template: "%s | Sundemon Tattoo Studio",
  },
  description:
    "Sundemon Tattoo Studio: tatuajes de autor, fine line y micro-trazo en Calle Ferraz 3, Alcalá de Henares.",
  keywords: [
    "estudio de tatuajes en Alcalá de Henares",
    "tatuajes Alcalá de Henares",
    "Sundemon Tattoo Studio",
    "fine line Madrid",
  ],
  openGraph: {
    title: "Sundemon Tattoo Studio | Tatuajes en Alcalá de Henares",
    description:
      "Tatuajes pensados para ti, en un espacio de calma y precisión en el centro histórico de Alcalá de Henares.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${prata.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
