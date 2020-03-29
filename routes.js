var express = require("express");
var router = express.Router();

router.get("/sumarry", (req, res) => {
  res.json({ message: "Sumarry" });
});

router.get("/state/:statename", (req, res) => {
  res.json({ message: "State Name" });
});

router.get("/latest", (req, res) => {
  res.json({ message: "Latest Data Updated" });
});

module.exports = router;
