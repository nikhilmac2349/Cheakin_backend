const router = require("express").Router();
const { getProfessure, CreateProfessure , UpdateProfessure } = require("../controllers/userController");

router.get("/", getProfessure);
router.post("/", CreateProfessure);
router.put("/:id" , UpdateProfessure)

module.exports = router;
