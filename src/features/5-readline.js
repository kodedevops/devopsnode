import { createInterface } from "node:readline/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const name = await rl.question("What's your name? ");

console.log(`Hello ${name}`);

rl.close();
