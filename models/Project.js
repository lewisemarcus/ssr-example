import mongoose from "mongoose"

const projectSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true },
)

const Project = mongoose.model("Message", projectSchema)

export default Project
