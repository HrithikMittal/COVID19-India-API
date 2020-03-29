var mongoose = require("mongoose");
var StateSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  confirmedNational: {
    type: Number,
    require: true
  },
  confirmedInternation: {
    type: Number,
    require: true
  },
  cured: {
    type: Number,
    require: true
  },
  death: {
    type: Number,
    require: true
  }
});

module.exports = State = mongoose.model("State", StateSchema);
