const { check } = require("express-validator");
const TaskModel = reqlib("app/models/TaskModel");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
    createValidator: [
        check("task")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Enter Task"),
        check("user")
            .trim()
            .not()
            .isEmpty()
            .withMessage("Enter user id")
    ],
    async create(req, res) {
        if (!ObjectId.isValid(req.body.user)) {
            return Responder.validationError(res, {
                user: "User id not valid"
            });
        }

        const task = new TaskModel({
            task: req.body.task,
            user: req.body.user,
            description: req.body.description || null
        });

        await task.save();

        Responder.success(res, null);
    },
    async list(req, res) {
        if (!ObjectId.isValid(req.params.id)) {
            return Responder.validationError(res, {
                user: "User id not valid"
            });
        }

        const tasks = await TaskModel.find(
            { user: req.params.id },
            { is_complete: 1, task: 1, description: 1, created_at: 1 }
        ).sort("-created_at");

        Responder.success(res, tasks);
    },
}