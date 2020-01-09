const router = require("express").Router();
const AuthController = reqlib("app/controllers/v1/AuthController");

router.post("/login", AuthController.login)
router.post("/register", AuthController.register)

module.exports = router;