import React from "react"

// function Login(props) {
//     return <h1>Goodbye {props.name}!</h1>
// }

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
        }
    }
    render() {
        return <h1>Goodbye {this.state.name}!</h1>
    }
}

export default Login
