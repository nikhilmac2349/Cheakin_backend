const Planned = require("../models/Planned");

exports.getPlannedCheckIns = async (req, res) => {
  const data = await Planned.find();
  res.json(data);
};

exports.addPlannedCheckIn = async (req, res) => {
  const plan = await Planned.create(req.body);
  res.json(plan);
};
