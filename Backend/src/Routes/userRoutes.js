const express = require("express");
const router = express.Router();
const userController = require("../Contollers/userController");
const nameMiddleware = require("../utils/middleware");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management endpoints
 */

/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - MobileNo
 *               - address
 *               - workCategory
 *               - avatar
 *             properties:
 *               name:
 *                 type: string
 *                 example: Monika Birla
 *               MobileNo:
 *                 type: string
 *                 example: "9876543210"
 *               address:
 *                 type: string
 *                 example: "123 Street, City"
 *               workCategory:
 *                 type: string
 *                 example: "school"
 *               avatar:
 *                 type: string
 *                 example: "https://example.com/avatar.jpg"
 *     responses:
 *       200:
 *         description: User created successfully
 */
router.post("/create", nameMiddleware, userController.UserCreate);

/**
 * @swagger
 * /user/update/{id}:
 *   post:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               MobileNo:
 *                 type: string
 *               address:
 *                 type: string
 *               workCategory:
 *                 type: string
 *               avatar:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 */
router.post("/update/:id", userController.updateUser);

/**
 * @swagger
 * /user/delete/{id}:
 *   post:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID to delete
 *     responses:
 *       200:
 *         description: User deleted successfully
 */
router.post("/delete/:id", userController.deleteUser);

/**
 * @swagger
 * /user/list:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all users
 */
router.get("/list", userController.listUser);

module.exports = router;










































// const express = require("express");
// const router = express.Router();
// const userController = require("../Contollers/userController");
// const nameMiddleware = require("../utils/middleware");
// const swaggerJSDoc = require("swagger-jsdoc");


// router.post("/create", nameMiddleware, userController.UserCreate );
// router.post("/update/:id", userController.updateUser);
// router.post("/delete/:id", userController.deleteUser)
// router.get("/list", userController.listUser);

// module.exports = router;
