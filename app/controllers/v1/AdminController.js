const UserModel = reqlib('app/models/UserModel');
const { check } = require("express-validator");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
    async userList(req, res) {
        var userConstraints = { is_admin: false }
        if (req.query.search) {
            userConstraints["$or"] = []
            userConstraints["$or"].push({ first_name: new RegExp(req.query.search) })
            userConstraints["$or"].push({ last_name: new RegExp(req.query.search) })
            userConstraints["$or"].push({ email: new RegExp(req.query.search) })
        }

        const users = await UserModel.paginate(userConstraints)

        return Responder.success(res, users)
    },
    async showUser(req, res) {
        if (!ObjectId.isValid(req.params.id)) {
            return Responder.validationError(res, {
                id: "User id not valid"
            });
        }

        const user = await UserModel.findOne({ _id: req.params.id })

        if (!user) {
            return Responder.notFound(res, 'User not found')
        }

        return Responder.success(res, user)
    },
    createUserValidator: [
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
        check("dob")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Enter date of birth")
            .isISO8601()
            .withMessage("Enter valid date")
    ],
    async deleteUser(req, res) {
        if (!ObjectId.isValid(req.params.id)) {
            return Responder.validationError(res, {
                id: "User id not valid"
            });
        }

        if (req.params.id == res.locals.decoded.sub) {
            return Responder.validationError(res, 'Why would you want to delete yourself?')
        }

        const user = await UserModel.findOne({ _id: req.params.id })

        if (!user) {
            return Responder.notFound(res, 'User not found')
        }

        await user.remove()

        return Responder.success(res, 'User deleted')
    }
}