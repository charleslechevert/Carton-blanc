const express = require("express");
const adminController = require("./controllers/adminController");

const router = express.Router();

router.get("/", (req,res) => {
    res.render("home")
});

router.get("/admin", (req,res) => {
    res.render("admin")
});

router.get("/setplayer", adminController.setPlayer);
router.get("/setpenalty", adminController.setPenalty);
router.get("/setRegister", adminController.setRegister);



router.post("/add-player", adminController.addPlayerAndRedirect);
router.post("/add-penalty", adminController.addPenaltyAndRedirect);


module.exports = router;