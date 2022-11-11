const express = require("express");
const playerController = require("./controllers/playerController");
const penaltyController = require("./controllers/penaltyController");
const registerController = require("./controllers/registerController");
const paymentController = require("./controllers/paymentController");
const mainController = require("./controllers/mainController");
const homeController = require("./controllers/homeController");
const teamController = require("./controllers/teamController");
const authController = require("./controllers/authController");
const authMiddlewares = require("./middlewares/auth");



const router = express.Router();



router.get("/admin",authMiddlewares.checkIsAdmin, (req,res) => {
    res.render("admin")
});


router.get("/setPlayer", authMiddlewares.checkIsAdmin, playerController.list);
router.post("/setPlayer", playerController.create);
router.get("/setplayer/delete/:id", playerController.destroy);
router.get("/modifyPlayer/:id", playerController.findOne);
router.post("/modifyPlayer/process/:id", playerController.update);


router.get("/setPenalty", authMiddlewares.checkIsAdmin, penaltyController.list);
router.post("/setPenalty", penaltyController.create);
router.get("/setPenalty/delete/:id", penaltyController.destroy);



router.get("/setRegister", authMiddlewares.checkIsAdmin, registerController.list);
router.post("/setRegister", registerController.create);
router.get("/setRegister/delete/:id", registerController.destroy);
router.get("/modifyRegister/:id", registerController.findOne);
router.post("/modifyRegister/process/:id", registerController.update);

router.get("/setPayment", authMiddlewares.checkIsAdmin, paymentController.list);
router.post("/setPayment", paymentController.registerPaid);

router.get("/setTeam", authMiddlewares.checkIsAdmin, teamController.list);
router.post("/setTeam", teamController.update);


router.get("/playerRanking", mainController.amountByPlayer);
router.get("/penaltylist", mainController.penaltylist);
router.get("/registerlist", mainController.registerlist);
router.get("/stats", mainController.statsByType);

router.get("/", homeController.home);

router.get('/adminSignin', authController.signin);
router.post('/adminSignin', authController.formAdminSigninSubmited); 










module.exports = router;