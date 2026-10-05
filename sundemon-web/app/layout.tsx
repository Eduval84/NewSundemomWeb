import type { Metadata, Viewport } from "next";
import { Manrope, Prata } from "next/font/google";
import { absoluteUrl, isIndexable, siteDescription, siteName, siteUrl, socialImage } from "@/lib/seo";
import "./globals.css";

const defaultTitle = "Sundemon Tattoo Studio | Tatuajes en Alcalá de Henares";

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
  metadataBase: siteUrl,
  title: {
    default: defaultTitle,
    template: "%s | Sundemon Tattoo Studio",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: isIndexable,
    follow: isIndexable,
    googleBot: {
      index: isIndexable,
      follow: isIndexable,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
  },
  openGraph: {
    title: defaultTitle,
    description: siteDescription,
    url: absoluteUrl("/"),
    siteName,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: socialImage,
        alt: "Interior de Sundemon Tattoo Studio en Alcalá de Henares",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteDescription,
    images: [socialImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
