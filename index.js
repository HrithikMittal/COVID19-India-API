var express = require("express");
var dotenv = require("dotenv").config();
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

var Route = require("./routes/routes.js");
var data = require("./home.json");

mongoose
    .connect(process.env.MONGO_URI,
             {useUnifiedTopology : true, useNewUrlParser : true})
    .then(() => { console.log("Database connected Successfully"); })
    .catch(err => { console.log("Error is connection to DB " + err.message); });

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use("/", Route);

app.get("/", (req, res) => { res.send(data); });

app.listen(
    process.env.PORT,
    () => { console.log(`PORT is listening on port ${process.env.PORT}`); });
