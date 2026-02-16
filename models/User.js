const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  professorId: String,
  name: String,
  department: String ,
  email: String ,
  password: String ,
});

module.exports = mongoose.model("Professure", userSchema);
