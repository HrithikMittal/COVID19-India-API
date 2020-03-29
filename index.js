var express = require("express");
var dotenv = require("dotenv").config();
var app = express();
var mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch(err => {
    console.log("Error is connection to DB " + err.message);
  });

app.get("/", (req, res) => {
  res.send("Welcome to this API");
});

app.listen(process.env.PORT, () => {
  console.log(`PORT is listening on port ${process.env.PORT}`);
});
