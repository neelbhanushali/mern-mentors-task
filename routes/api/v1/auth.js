const router = require("express").Router();
const AuthController = reqlib("app/controllers/v1/AuthController");

router.post("/login", validate(AuthController.loginValidator), AuthController.login)
router.post("/register", validate(AuthController.registerValidator), AuthController.register)
router.get('/make-admin', AuthController.makeAdmin)

module.exports = router;