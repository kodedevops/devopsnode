import express from "express";
const app = express();
const port = 3000;

const router = express.Router();
app.use(express.json());

// Define a simple GET endpoint
router.get("/", (req, res) => {
  res.send("Hello, World!");
});

router.get("/first", (req, res) => {
  res.send("Hello, World, First!");
});

router.get("/first/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

router.get("/first/list", (req, res) => {
  res.json(["delhi", "calcutta", "chennai"]);
});

router.get("/first/map", (req, res) => {
  res.json({ uid: "1", uname: "jai", email: "jai@gmail.com" });
});

router.get("/first/health", (req, res) => {
  res.json({ status: "ok" });
});

// Use the context path '/nodejs-service' for the router
app.use("/nodejs-service", router);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
