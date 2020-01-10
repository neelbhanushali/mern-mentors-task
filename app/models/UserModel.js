const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new Schema(
    {
        first_name: String,
        middle_name: {
            type: String,
            default: null
        },
        last_name: String,
        dob: Date,
        email: String,
        password: String,
        active: {
            type: Boolean,
            default: true
        },
        is_admin: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    }
);

UserSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

UserSchema.plugin(mongoosePaginate);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel