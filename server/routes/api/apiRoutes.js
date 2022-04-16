import express from "express"

import { router as userRoutes } from "./userRoutes"
import { router as projectRoutes } from "./projectRoutes"

const router = express.Router()

router.use("/user", userRoutes)
router.use("/project", projectRoutes)

export { router }
