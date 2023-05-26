const router = require("express").Router();
const controller = require("../controller/produto.controller");

const authMiddleware = require("../middleware/auth.middleware");

//GET
router.get("/find", authMiddleware, controller.findAll);
router.get("/find/:id", authMiddleware, controller.find);

//POST
router.post("/create", authMiddleware, controller.create);

//PUT
router.put("/update/:id", authMiddleware, controller.update);

//DELET
router.delete("/delete/:id", authMiddleware, controller.remove);

module.exports = router;