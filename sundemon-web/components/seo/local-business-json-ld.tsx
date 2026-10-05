import { absoluteUrl, siteDescription, siteName } from "@/lib/seo";

export function LocalBusinessJsonLd() {
  const businessId = absoluteUrl("/#tattoo-parlor");
  const homeUrl = absoluteUrl("/");
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TattooParlor",
        "@id": businessId,
        name: siteName,
        url: homeUrl,
        description: siteDescription,
        image: [
          absoluteUrl("/images/estudio.jpeg"),
          absoluteUrl("/images/H1Tatuajes.avif"),
        ],
        logo: absoluteUrl("/images/logo.png"),
        telephone: "+34656925570",
        email: "hola@sundemon.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Calle de Ferraz 3",
          postalCode: "28807",
          addressLocality: "Alcalá de Henares",
          addressRegion: "Madrid",
          addressCountry: "ES",
        },
        areaServed: {
          "@type": "City",
          name: "Alcalá de Henares",
        },
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: homeUrl,
        name: siteName,
        inLanguage: "es-ES",
        publisher: {
          "@id": businessId,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
