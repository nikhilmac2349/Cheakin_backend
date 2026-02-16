const Professure = require("../models/User");

exports.getProfessure = async (req, res) => {
    const users = await Professure.find();
    res.json(users);
};

exports.CreateProfessure = async (req, res) => {
    console.log(req.body);
    const user = await Professure.create(req.body);
    res.json(user);
};

exports.UpdateProfessure = async (req, res) => {
  const updatedUser = await Professure.findByIdAndUpdate(
    req.params.id, // where
    req.body, // what
    { new: true } // return updated
  );

  res.json(updatedUser);
};

// exports.updateProfessure = async (req, res) => {
//   const user = await Professure.findById(req.params.id);

//   user.name = req.body.name || user.name;
//   user.email = req.body.email || user.email;

//   await user.save();

//   res.json(user);
// };
