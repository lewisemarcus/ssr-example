import React from "react"
import ReactDOMServer from "react-dom/server"
import path from "path"
import fs from "fs"
import express from "express"

import App from "../../src/App"
import Login from "../../src/Login"

import { router as userRoutes } from "../routes/api/userRoutes"
import { router as projectRoutes } from "../routes/api/projectRoutes"

const router = express.Router()

router.use("/user", userRoutes)
router.use("/project", projectRoutes)

router.get("/", (req, res) => {
    const app = ReactDOMServer.renderToString(<App />)
    const indexFile = path.resolve("./build/index.html")

    fs.readFile(indexFile, "utf8", (err, data) => {
        if (err) {
            console.error("Something went wrong:", err)
            return res.status(500).send("Oops, better luck next time!")
        }

        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${app}</div>`,
            ),
        )
    })
})
router.get("/login", (req, res) => {
    const name = "Marcus Lewis"
    const login = ReactDOMServer.renderToString(<Login name={name} />)
    const indexFile = path.resolve("./build/index.html")

    fs.readFile(indexFile, "utf8", (err, data) => {
        if (err) {
            console.error("Something went wrong:", err)
            return res.status(500).send("Oops, better luck next time!")
        }

        return res.send(
            `<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="utf-8" />
                        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="theme-color" content="#000000" />
                        <meta
                            name="description"
                            content="Web site created using create-react-app"
                        />
                        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                
                        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                        <script>
                            window.__INITIAL__DATA__ = ${JSON.stringify({
                                name,
                            })}
                        </script>
                        <title>React App</title>
                    </head>
                    <body>
                        <noscript>You need to enable JavaScript to run this app.</noscript>
                        <div id="root">${login}</div>
                    </body>
                </html>
                `,
        )
    })
})

export { router }
