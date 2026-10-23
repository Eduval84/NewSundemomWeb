import { readdirSync } from "node:fs";
import path from "node:path";

const stylesDirectory = path.join(process.cwd(), "public", "images", "tatuajes", "estilos");
const imagePattern = /\.(avif|jpe?g|png|webp)$/i;

export function getStyleImages(folder: string): string[] {
  try {
    return readdirSync(path.join(stylesDirectory, folder))
      .filter((file) => imagePattern.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `/images/tatuajes/estilos/${folder}/${file}`);
  } catch {
    return [];
  }
}
