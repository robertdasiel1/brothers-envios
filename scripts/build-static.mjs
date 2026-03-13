import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");

const entriesToCopy = [
  "index.html",
  "styles.css",
  "assets"
];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const entry of entriesToCopy) {
  const source = path.join(root, entry);
  const target = path.join(dist, entry);

  if (!fs.existsSync(source)) {
    continue;
  }

  fs.cpSync(source, target, { recursive: true });
}

console.log("Static build complete: dist/ generated");
