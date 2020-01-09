const UserModel = reqlib("app/models/UserModel")
const { check } = require("express-validator");

module.exports = {
    login(req, res) {
        res.send('login')
    },
    registerValidator: [
        check("first_name")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Enter First Name"),
        check("last_name")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Enter First Name"),
        check("email")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Enter Email")
            .isEmail()
            .withMessage("Enter valid email")
            .custom(async function (value) {
                const user = await UserModel.findOne({ email: value });
                if (user) {
                    return Promise.reject("Email already in use");
                }
            })
            .normalizeEmail({ gmail_remove_dots: false }),
        check("password")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Enter Password")
            .isLength({ min: 8 })
            .withMessage("Enter 8 character password"),
        check("password_confirmation")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Need to confirm password")
            .custom(async function (value, { req }) {
                if (value != req.body.password) {
                    return Promise.reject("Passwords do not match");
                }
            }),
        check("dob")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Enter date of birth")
            .isISO8601()
            .withMessage("Enter valid date")
    ],
    async register(req, res) {
        const user = new UserModel({
            first_name: req.body.first_name,
            middle_name: req.body.middle_name ? req.body.middle_name : null,
            last_name: req.body.last_name,
            dob: req.body.dob,
            email: req.body.email,
            password: req.body.password
        });

        await user.save();

        return Responder.success(res, null);
    }
}