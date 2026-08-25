import { createReadStream } from "node:fs";

const readStream = createReadStream("src/app.js");

try {
  for await (const chunk of readStream) {
    console.log(`Received ${chunk.length} bytes`);
    // Process chunk here
  }
  console.log("Finished reading file.");
} catch (error) {
  console.error("Error reading stream:", error);
}
