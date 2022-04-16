import React, { Fragment, useEffect, useState } from "react"
function Login(props) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <Fragment>
            <p>You clicked {count} times</p>
            <h1>Goodbye {props.name}!</h1>
            <button id="button" type="button" className="btn btn-primary">
                1
            </button>
            <button onClick={() => setCount(count + 1)}>Click me</button>
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
