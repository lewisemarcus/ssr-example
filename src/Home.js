import React from "react"

// function Home() {
//     return <h1>Hello Sammy!</h1>
// }

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello Sammy!</h1>
                <a href="/with-react-router">with React Router</a>
            </React.Fragment>
        )
    }
}

export default Home
