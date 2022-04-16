import express from "express"

import { router as userRoutes } from "./userRoutes"
import { router as projectRoutes } from "./projectRoutes"

const router = router.express()

router.use("/user", userRoutes)
router.use("/project", projectRoutes)

export { router }
