const { getPlannedCheckIns, addPlannedCheckIn } = require("../controllers/plannedCheakinController");
const router = require("express").Router();

router.get("/", getPlannedCheckIns);
router.post("/", addPlannedCheckIn);

module.exports = router;
