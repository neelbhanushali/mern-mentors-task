const UserModel = reqlib('app/models/UserModel');
const TaskModel = reqlib('app/models/TaskModel');

module.exports = {
    async profile(req, res) {
        const user = await UserModel.findOne(
            { _id: res.locals.decoded.sub },
            { first_name: 1, middle_name: 1, last_name: 1, dob: 1 }
        );

        return Responder.success(res, user);
    },
    async taskList(req, res) {
        const tasks = await TaskModel.find(
            { user: res.locals.decoded.sub },
            { is_complete: 1, task: 1, description: 1, created_at: 1 }
        ).sort("-created_at");

        Responder.success(res, tasks);
    }
}