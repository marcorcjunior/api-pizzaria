const router = require("express").Router();
const controller = require("../controller/auth.controller");

router.post("/login", controller.auth);

module.exports = router;