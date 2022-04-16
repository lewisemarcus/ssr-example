import mongoose from "mongoose"
import Project from "./Project"
import User from "./User"

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL)
}

const models = { User, Project }

export { connectDb }

export default models
