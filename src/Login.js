import React, { Fragment } from "react"

function Login(props) {
    return (
        <Fragment>
            <h1>Goodbye {props.name}!</h1>
            <button id="button" type="button" className="btn btn-primary">
                1
            </button>
        </Fragment>
    )
}

// class Login extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: props.name,
//         }
//     }

//     render() {
//         return (
//             <Fragment>
//                 <h1>Goodbye {this.state.name}!</h1>
//                 <button id="button" type="button" className="btn btn-primary">
//                     1
//                 </button>
//             </Fragment>
//         )
//     }
// }

export default Login
