import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Hot Dog Stand — one dad joke, pun lands on the last line:
// "on a roll" means both doing well and, literally, served in a bun.
const JOKE = "My dad started a hot dog stand. He says business is on a roll.";
const MAX_CHARS = 200;

const charCount = [...JOKE].length;
if (charCount < 1 || charCount > MAX_CHARS) {
  throw new Error(`Joke must be 1-200 characters, got ${charCount}.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${charCount}-character dad joke to ${join(outDir, "entry.txt")}`);
