const router = require("express").Router();
const UserController = reqlib("app/controllers/v1/UserController");

router.get("/profile", UserController.profile)
router.get("/tasks", UserController.taskList)
router.post("/tasks/:id", UserController.markTaskComplete)

module.exports = router;