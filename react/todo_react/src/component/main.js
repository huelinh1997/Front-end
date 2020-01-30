import React from 'react'
import Todo from './todo'
import {connect} from "react-redux";
import CheckboxAll from "./checkboxAll";
import {
    Switch,
    Route
} from "react-router-dom";

class Main extends React.Component {
    render() {
        console.log('list todo: ', this.props.todos)
        let listTodo = this.props.todos.map((item, index)=> {
            return <Todo key={index} todo={item}/>
        })
        return (
            <section className="main" id="main">
                {
                    listTodo.length > 0 &&
                    <CheckboxAll/>
                }
                <ul className="todo-list" id="todo-list">
                    {/*{listTodo}*/}
                    <Switch>
                        {/*<Route exact path="/" component={Home}/>*/}
                        <Route exact path="/">{listTodo}</Route>
                        <Route path="/active"/>
                        <Route path="/completed"/>
                    </Switch>
                </ul>
            </section>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps)(Main)