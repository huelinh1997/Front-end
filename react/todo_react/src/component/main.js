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
        let listTodo = this.props.todos.map((item, index)=> {
            return <Todo key={index} todo={item}/>
        })
        let active = this.props.todos.filter(item=> !item.hasDone)
        let completed = this.props.todos.filter(item=> item.hasDone)
        let listActive = active.map((item, index)=> {
            return <Todo key={index} todo={item}/>
        })
        let listCompleted = completed.map((item, index)=> {
            return <Todo key={index} todo={item}/>
        })
        return (
            <section className="main" id="main">
                {
                    listTodo.length > 0 &&
                    <CheckboxAll/>
                }
                <ul className="todo-list" id="todo-list">
                    <Switch>
                        <Route exact path="/">{listTodo}</Route>
                        <Route path="/active">{listActive}</Route>
                        <Route path="/completed">{listCompleted}</Route>
                    </Switch>
                </ul>
            </section>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        todos: state.todos,
        isCheckAll: state.isCheckAll
    }
}
export default connect(mapStateToProps)(Main)