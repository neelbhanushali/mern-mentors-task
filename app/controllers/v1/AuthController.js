const UserModel = reqlib("app/models/UserModel")
const { check } = require("express-validator");
const moment = require('moment')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')

module.exports = {
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
    },
    loginValidator: [
        check("email")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Enter Email")
            .isEmail()
            .withMessage("Enter valid email")
            .custom(async function (value) {
                const user = await UserModel.findOne({ email: value });
                if (!user) {
                    return Promise.reject("Kindly register first");
                }
            }),
        check("password")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Enter password")
    ],
    async login(req, res) {
        const user = await UserModel.findOne({ email: req.body.email });

        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return Responder.unauthorized(res, "Invalid credentials");
        }

        const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRY,
            notBefore: process.env.JWT_NOT_BEFORE
        });

        const expires_at = moment()
            .add(
                process.env.JWT_EXPIRY_MOMENT_MAGNITUDE,
                process.env.JWT_EXPIRY_MOMENT_UNIT
            )
            .toISOString();

        return Responder.success(res, { token, expires_at });
    },
}