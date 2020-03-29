var express = require("express");
var dotenv = require("dotenv").config();
var app = express();

var port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to this API");
});

app.listen(port, () => {
  console.log(`PORT is listening on port ${port}`);
});
