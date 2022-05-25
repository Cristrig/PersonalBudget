const express = require("express");
const http = require("http");

const app = express();
http.createServer(app);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
