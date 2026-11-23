import * as fs from "node:fs";

// One word, the entrant's own make.fun username, for
// "One Word, One Username, One Reward": nimonandang15 —
// one handle, no explanation, no links, no pitch.
const text = "nimonandang15";

// The gate allows 1 to 30 characters: refuse loudly instead of ever
// writing a text that would fail it (e.g. with a stray newline).
if ([...text].length < 1 || [...text].length > 30 || text.trim() === "") {
  throw new Error("entry must be 1 to 30 characters");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
