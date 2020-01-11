const UserModel = reqlib('app/models/UserModel');

module.exports = {
    async profile(req, res) {
        const user = await UserModel.findOne(
            { _id: res.locals.decoded.sub },
            { first_name: 1, middle_name: 1, last_name: 1, dob: 1 }
        );

        return Responder.success(res, user);
    }
}