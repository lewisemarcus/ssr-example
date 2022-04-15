import React from "react"
import { hydrateRoot } from "react-dom/client"

import App from "./App"
import Login from "./Login"

hydrateRoot(
    document.getElementById("root"),
    <App />,
    <Login name={window.__INITIAL__DATA__.name} />,
)
