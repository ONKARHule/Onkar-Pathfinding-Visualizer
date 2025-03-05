const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the 'public' directory
app.use("/public", express.static(path.join(__dirname, "public")));

// Serve index.html for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 🔹 Fix: Catch-all route to serve index.html for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(1337, () => {
  console.log("The server is up and running!");
});
