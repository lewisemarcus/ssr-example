import mongoose from "mongoose"
import "mongoose-type-email"
import uuid from "node-uuid"
import mailer from "../email/mailer"
import { autoIncrement, connectDb } from "./index"
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema(
    {
        _id: {
            type: Number,
            alias: "id",
            required: true,
        },
        username: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            unique: true,
            required: true,
        },
        emailCode: {
            type: String,
            unique: true,
            required: true,
            default: uuid.v4,
        },
    },
    { timestamps: true },
)

userSchema.plugin(autoIncrement.plugin, "User")

userSchema.statics.findByLogin = async function (login) {
    let user = await this.findOne({
        username: login,
    })
    if (!user) {
        user = await this.findOne({ email: login })
    }
    return user
}

userSchema.pre("remove", async function () {
    this.model("Project").deleteMany({ user: this._id })
})

userSchema.pre("save", async function () {
    let user = this

    const saltRounds = 10

    const hashed_password = await hashPassword(user.password, saltRounds)

    user.password = hashed_password
})
async function hashPassword(password, saltRounds) {
    try {
        let newHash = await bcrypt.hash(password, saltRounds)
    } catch (err) {
        // error handling here
    }

    return newHash
}
userSchema.post("save", async function (newUser) {
    const id = newUser.emailCode
    mailer.verificationEmail(id, newUser.email)
    return newUser
})
const User = mongoose.model("User", userSchema)

export default User
