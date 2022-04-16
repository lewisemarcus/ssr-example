import mongoose from "mongoose"

import User from "./User"
import Project from "./Project"

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL)
}

const models = { User, Project }

export { connectDb }

export default models
