import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

// Define a simple GET endpoint
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/first/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/first/list", (req, res) => {
  res.json(["delhi", "calcutta", "chennai"]);
});

app.get("/first/map", (req, res) => {
  res.json({ uid: "1", uname: "jai", email: "jai@gmail.com" });
});

app.get("/first/health", (req, res) => {
  res.json({ status: "ok" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
