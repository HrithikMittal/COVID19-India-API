var express = require("express");
var router = express.Router();
var State = require("../Models/state");

router.get("/summary", (req, res) => {
  State.find()
    .then(data => {
      var confirmedNational = 0;
      var confirmedInterNational = 0;
      var death = 0;
      var cured = 0;
      var total = 0;
      data.map(d => {
        confirmedNational =
          confirmedNational + parseInt(d["confirmedNational"]);
        confirmedInterNational =
          confirmedInterNational + parseInt(d["confirmedInternational"]);
        death = death + parseInt(d["death"]);
        cured = cured + parseInt(d["cured"]);
      });

      total = confirmedNational + confirmedInterNational + death + cured;
      res.json({
        "Total Confirmed cases (Indian National)": confirmedNational,
        "Total Confirmed cases ( Foreign National )": confirmedInterNational,
        "Cured/Discharged/Migrated": cured,
        Death: death,
        "Total Cases": total
      });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
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
