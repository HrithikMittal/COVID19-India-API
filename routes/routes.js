var express = require("express");
var router = express.Router();
var State = require("../Models/state");

router.get("/summary", (req, res) => {
  res.json({ message: "Sumarry" });
});

router.get("/states", (req, res) => {
  State.find()
    .then(data => {
      res.json({ state: data });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
});

router.get("/state/:statename", (req, res) => {
  var stateid = req.url.split("/");
  stateid = stateid[2].replace("%20", " ");
  console.log(stateid);
  State.find({ name: stateid })
    .then(data => {
      res.json({ data });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
});

router.get("/latest", (req, res) => {
  res.json({ message: "Latest Data Updated" });
});

module.exports = router;
