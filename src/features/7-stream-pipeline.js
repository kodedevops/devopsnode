import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises"; // Native Promise pipeline

try {
  // ESM supports top-level await out of the box
  await pipeline(createReadStream("src/app.js"), createGzip(), createWriteStream("src/app.js.gz"));
  console.log("Pipeline succeeded.");
} catch (error) {
  console.error("Pipeline failed:", error);
}
