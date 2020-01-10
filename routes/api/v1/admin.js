const router = require("express").Router();
const AdminController = reqlib("app/controllers/v1/AdminController");

router.get("/users", AdminController.userList)
router.get("/users/:id", AdminController.showUser)

module.exports = router;