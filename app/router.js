const express = require("express");
const adminController = require("./controllers/adminController");
const homeController = require("./controllers/homeController");

const router = express.Router();

router.get("/", homeController.home);

router.get("/admin", (req,res) => {
    res.render("admin")
});

router.get("/stats", homeController.stats);
router.get("/checkout", homeController.checkout)


router.get("/penaltylist", homeController.penaltyList);
router.get("/registerlist", homeController.registerList);
router.get("/playerranking",homeController.playerRanking)


router.get("/setplayer", adminController.setPlayer);
router.get("/setplayer/delete/:id", adminController.deleteOnePlayer);
router.get("/setpenalty", adminController.setPenalty);
router.get("/setpenalty/delete/:id", adminController.deleteOnePenalty);
router.get("/setRegister", adminController.setRegister);
router.get("/setregister/delete/:id", adminController.deleteOneRegister);
router.get("/setpayment", adminController.setPayment);
router.get("/settings", adminController.settings);


router.post("/add-player", adminController.addPlayerAndRedirect);
router.post("/add-penalty", adminController.addPenaltyAndRedirect);
router.post("/add-register", adminController.addRegisterAndRedirect);
router.post("/add-settlement", adminController.addPaymentAndRedirect);
router.post("/add-settings", adminController.addSettingsAndRedirect);

router.post("/checkout2", homeController.addCheckout);

module.exports = router;