const router = require("express").Router();
const AuthMiddleware = reqlib('app/middlewares/AuthMiddleware')
const AdminMiddleware = reqlib('app/middlewares/AdminMiddleware')

router.use("/auth", require("./auth"));
router.use("/admin", [AuthMiddleware, AdminMiddleware], require('./admin'))

module.exports = router;