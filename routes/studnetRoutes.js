const router = require("express").Router();
const {getAllStudent , addStudnet , getStudentbyid }  = require("../controllers/studentController")


router.get("/" , getAllStudent);
router.post("/" ,addStudnet );
router.get("/:id" , getStudentbyid);

module.exports = router;