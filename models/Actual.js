const mongoose = require("mongoose");

const actualSchema = new mongoose.Schema({
  checkInId: String,
  professorId: String,
  studentId: String,
  date: String,
  durationMinutes: Number,
  notes: String
});

module.exports = mongoose.model("Actual", actualSchema);
