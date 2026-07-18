import sharp from "sharp";
import { readdirSync, mkdirSync } from "fs";
import path from "path";

const srcDir = path.resolve("public/images/real");
const outDir = path.resolve("public/images/people");
mkdirSync(outDir, { recursive: true });

const files = readdirSync(srcDir).filter((f) => f.toLowerCase().endsWith(".jpeg") || f.toLowerCase().endsWith(".jpg"));

for (const file of files) {
  const inputPath = path.join(srcDir, file);
  const base = file.replace(/\.jpg\.jpeg$/i, "").replace(/\.jpeg$/i, "").replace(/\s+/g, "-").replace(/[()]/g, "");
  const outputPath = path.join(outDir, `${base}.jpg`);

  const img = sharp(inputPath).rotate(); // auto-orient using EXIF, then strip orientation tag
  const meta = await img.metadata();
  const maxDim = 2000;
  const resizeOpts =
    Math.max(meta.width ?? 0, meta.height ?? 0) > maxDim
      ? { width: meta.width > meta.height ? maxDim : undefined, height: meta.height >= meta.width ? maxDim : undefined, withoutEnlargement: true }
      : null;

  let pipeline = img;
  if (resizeOpts) pipeline = pipeline.resize(resizeOpts);

  await pipeline.jpeg({ quality: 90, mozjpeg: true }).toFile(outputPath);
  console.log(`${file} -> ${base}.jpg (${meta.width}x${meta.height})`);
}
console.log("Done.");
