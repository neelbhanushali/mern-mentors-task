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
        const task = new TaskModel({
            task: req.body.task,
            user: req.body.user,
            description: req.body.description || null
        });

        await task.save();

        Responder.success(res, null);
    },
}