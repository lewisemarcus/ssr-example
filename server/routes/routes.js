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
        const Counter = () => {
            console.log("hi")
            let number = parseInt(document.getElementById("button").textContent)

            number += 1

            return (document.getElementById("button").textContent = number)
        }

        const head = data
            .split("</head>")[0]
            .split("<head>")[1]
            .split("<script")[0]

        const html = `
            <!doctype html>
                <html>
                <head>
                ${head}
                <script>window.__INITIAL__DATA__ = ${JSON.stringify({
                    name,
                })}</script>
                </head>
                <body>
                <div id="root">${login}</div>
                <script>
                document.getElementById("button").addEventListener("click", ${Counter})
                </script> 
            </body>
            </html>`

        return res.send(html)
    })
})

export { router }