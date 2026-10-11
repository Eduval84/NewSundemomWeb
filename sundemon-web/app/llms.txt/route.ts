import { absoluteUrl } from "@/lib/seo";

export function GET() {
  const content = `# Sundemon Tattoo Studio

> Estudio de tatuajes de autor en Alcalá de Henares, Madrid. Diseños personalizados, fine line y micro-trazo.

## Páginas principales
- [Inicio](${absoluteUrl("/")})
- [Tatuajes y proceso](${absoluteUrl("/tatuajes")})
- [El estudio y el equipo](${absoluteUrl("/estudio")})
- [Contacto y citas](${absoluteUrl("/contacto")})

## Información del estudio
- Dirección: Calle de Ferraz 3, 28807, Alcalá de Henares, Madrid, España
- Teléfono: +34 656 925 570
- Email: hola@sundemon.com
- Idioma principal: español

## Sitemap
- [Sitemap XML](${absoluteUrl("/sitemap.xml")})
`;

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
