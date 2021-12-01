const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/todos", (req, res) => {
  res.send("Hello World");
});
//===============================

app.use(express.json());

app.post("/api/todos", function (req, res) {
  res.send("success");
});

app.listen(3000);
