import {} from "dotenv/config"

import express from "express"

import models, { connectDb } from "../models/index"

const PORT = process.env.PORT || 3006
const app = express()
import { router as mainRoute } from "../server/routes/routes"

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/", mainRoute)
app.use(express.static("./build"))

const eraseDatabaseOnSync = true

connectDb().then(async () => {
    if (eraseDatabaseOnSync) {
        await Promise.all([
            models.User.deleteMany({}),
            models.Project.deleteMany({}),
        ])
    }
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`)
    })
})
