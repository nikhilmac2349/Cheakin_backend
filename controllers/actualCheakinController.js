const Actual = require("../models/Actual");

exports.getActualCheckIns = async (req, res) => {
    try {
        const data = await Actual.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addActualCheckIn = async (req, res) => {
    try {
        const checkin = await Actual.create(req.body);
        res.json(checkin);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
