const mongoose = require("mongoose");

const plannedSchema = new mongoose.Schema({
  planId: String,
  professorId: String,
  studentId: String,
  frequency: String,
  plannedCount: Number,
  semester: String,
});

module.exports = mongoose.model("Planned", plannedSchema);
