const { listingController } = require("./controllers/listingController");
const {authController} = require("./controllers/authController")

const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({ message: "Rest Service Operational" });
});

router.use('/listing', listingController);
router.use('/auth', authController)

module.exports = router;
