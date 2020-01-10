const router = require("express").Router();
const AdminController = reqlib("app/controllers/v1/AdminController");

router.get("/users", AdminController.userList)

module.exports = router;