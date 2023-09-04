const { Router } = require("express");
const authController = require("../controllers/authControllers");
const { registerValidation, loginValidation } = require("../helpers/validator");
const { validationMiddleware } = require("../middlewares/validators-middleware");
const { userAuth } = require("../middlewares/auth-middleware");

const router = Router();

router.get("/get-users", authController.getUsers);
router.post("/register", registerValidation, validationMiddleware, authController.register);
router.post("/login", loginValidation, validationMiddleware, authController.login);
router.get("/protected", userAuth, authController.protected);
router.get("/logout", authController.logout);

module.exports = router;
