import type { Metadata } from "next";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://sundemom.es";

const parsedSiteUrl = new URL(
  /^https?:\/\//i.test(configuredSiteUrl)
    ? configuredSiteUrl
    : `https://${configuredSiteUrl}`,
);

export const siteUrl = new URL(`${parsedSiteUrl.origin}/`);
export const siteName = "Sundemon Tattoo Studio";
export const siteDescription =
  "Estudio de tatuajes de autor en Alcalá de Henares. Diseños personalizados, fine line y micro-trazo con atención cercana.";
export const socialImage = "/images/estudio.jpeg";
export const isIndexable =
  process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
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
      title: fullTitle,
      description,
      images: [socialImage],
    },
  };
}
