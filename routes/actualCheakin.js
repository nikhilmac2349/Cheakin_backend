const {getActualCheckIns , addActualCheckIn } = require("../controllers/actualCheakinController");
const router = require("express").Router();

router.get("/" , getActualCheckIns)
router.post("/" , addActualCheckIn);


module.exports = router ; 