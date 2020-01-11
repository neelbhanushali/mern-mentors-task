const router = require("express").Router();
const UserController = reqlib("app/controllers/v1/UserController");

router.get("/profile", UserController.profile)

module.exports = router;