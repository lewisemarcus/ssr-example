import mongoose from "mongoose"
import "mongoose-type-email"
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            unique: true,
            required: true,
        },
    },
    { timestamps: true },
)

userSchema.statics.findByLogin = async function (login) {
    let user = await this.findOne({
        username: login,
    })
    if (!user) {
        user = await this.findOne({ email: login })
    }
    return user
}

userSchema.pre("remove", function (next) {
    this.model("Project").deleteMany({ user: this._id }, next)
})

const User = mongoose.model("User", userSchema)

export default User
