import React from "react"
import { hydrateRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import Login from "./Login"
import MultipleRoutes from "./components/MultipleRoutes"
let name = ""
if (window.__INITIAL__DATA__ != undefined) name = window.__INITIAL__DATA__.name
const BasicExample = () => (
    <Router>
        <MultipleRoutes />
    </Router>
)

hydrateRoot(
    document.getElementById("root"),
    <App />,
    <Login name={name} />,
    <BasicExample />,
)
