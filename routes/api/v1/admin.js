const router = require("express").Router();
const AdminController = reqlib("app/controllers/v1/AdminController");
const TaskController = reqlib("app/controllers/v1/TaskController");
const AuthController = reqlib("app/controllers/v1/AuthController");

router.get("/users", AdminController.userList)
router.post("/users", validate(AdminController.createUserValidator), AuthController.register)
router.get("/users/:id", AdminController.showUser)
router.delete("/users/:id", AdminController.deleteUser)

router.post("/users/:id/tasks", TaskController.create)
router.get("/users/:id/tasks", TaskController.list)

module.exports = router;