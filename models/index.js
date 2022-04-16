import mongoose from "mongoose"

import User from "./User"
import Project from "./Project"

import * as autoIncrement from "mongoose-auto-increment"

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL)
}

autoIncrement.initialize(connectDb)

const models = { User, Project }

export { connectDb, autoIncrement }

export default models
