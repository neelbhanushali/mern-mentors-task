const UserModel = reqlib('app/models/UserModel');

module.exports = {
    async userList(req, res) {
        const users = await UserModel.paginate({ is_admin: false })

        return Responder.success(res, users)
    },
    async showUser(req, res) {
        const user = await UserModel.findOne({ _id: req.params.id })

        if (!user) {
            return Responder.notfound(res, 'User not found')
        }

        return Responder.success(res, user)
    }
}