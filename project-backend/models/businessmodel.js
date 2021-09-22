const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Birthday: Number,
  Gender: String,
});

const SignUpModel = mongoose.model("SignUpModel", SignUpSchema);
module.exports = SignUpModel;
