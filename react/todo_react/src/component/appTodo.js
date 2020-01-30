import React from 'react'
import Content from "./content";

class AppTodo extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">todos</h1>
                <Content/>
            </div>
        )
    }
}

export default AppTodo