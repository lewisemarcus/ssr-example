import React from "react"
import ReactDOMServer from "react-dom/server"
import path from "path"
import fs from "fs"
import express from "express"

import App from "../../src/App"
import Login from "../../src/Login"

import counterHandler from "../../logic/login"

import { router as api } from "./api/apiRoutes"

const router = express.Router()

const Context = React.createContext({})

router.use("/api", api)

router.get("/", async (req, res) => {
    const contextValue = { requests: [] }
    const app = ReactDOMServer.renderToString(
        <Context.Provider value={contextValue}>
            <App />
        </Context.Provider>,
    )
    const indexFile = path.resolve("./build/index.html")

    await Promise.all(contextValue.requests)
    delete contextValue.requests

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
router.get("/login", async (req, res) => {
    const contextValue = { requests: [] }
    const name = "Marcus Lewis"
    const login = ReactDOMServer.renderToString(
        <Context.Provider value={contextValue}>
            <Login name={name} />
        </Context.Provider>,
    )
    const indexFile = path.resolve("./build/index.html")

    await Promise.all(contextValue.requests)
    delete contextValue.requests
    fs.readFile(indexFile, "utf8", (err, data) => {
        if (err) {
            console.error("Something went wrong:", err)
            return res.status(500).send("Oops, better luck next time!")
        }

        const counter = counterHandler
            .toString()
            .split("function counterHandler() {")[1]
            .split(";\n}")[0]

        const head = data
            .split("</head>")[0]
            .split("<head>")[1]
            .split("<script")[0]

        const html = `
            <!doctype html>
                <html>
                <head>
                ${head}
                </head>
                <body>
                <div id="root">${login}</div>
                <script>${counter}</script>
            </body>
            </html>`
        return res.send(html)
    })
})

export { router }
