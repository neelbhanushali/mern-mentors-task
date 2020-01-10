const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const TaskSchema = new Schema(
    {
        user: {
            type: ObjectId,
            ref: "User"
        },
        task: String,
        description: {
            type: String,
            default: null
        },
        is_complete: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    }
);

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel