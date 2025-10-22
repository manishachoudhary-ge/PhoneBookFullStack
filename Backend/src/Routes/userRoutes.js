const express = require("express");
const router = express.Router();
const userController = require("../Contollers/userController");
const nameMiddleware = require("../utils/middleware")

router.post("/create", nameMiddleware, userController.UserCreate );
router.post("/update/:id", userController.updateUser);
router.post("/delete/:id", userController.deleteUser)
router.get("/list", userController.listUser);

module.exports = router;
