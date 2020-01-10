const UserModel = reqlib('app/models/UserModel');

module.exports = {
    async userList(req, res) {
        const users = await UserModel.find({ is_admin: false })

        return Responder.success(res, users)
    }
}