const router = require("express").Router();
const AdminController = reqlib("app/controllers/v1/AdminController");
const AuthController = reqlib("app/controllers/v1/AuthController");

router.get("/users", AdminController.userList)
router.post("/users", validate(AdminController.createUserValidator), AuthController.register)
router.get("/users/:id", AdminController.showUser)

module.exports = router;