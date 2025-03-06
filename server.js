const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

const PORT = process.env.PORT || 1337;  // Use Render's assigned port
app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}!`);
});
