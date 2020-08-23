const router = require("express").Router();
const userRoutes = require("./users");
const uploadRoutes = require("./uploads");



router.use("/users", userRoutes);
// router.use("/profile", pvWattsRoutes);
router.use("/uploads", uploadRoutes);

module.exports = router;
