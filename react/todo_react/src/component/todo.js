import React from 'react'
import {connect} from "react-redux";
import {checkTodo} from '../action/action'

class Todo extends React.Component{
    render() {
        let {id, task, hasDone} = this.props.todo;
        let completed = hasDone ? 'completed': '';
        //console.log('e_todo',e_todo)
        return (
            <li id={`todo${id}`} className={completed}>
                <div className="todoItem__wrap">
                    <input onClick={()=> this.props.handlerOnCheck(id)} className="toggle" type="checkbox" name="check"/>
                        <label className="desTodo">{task}</label>
                        <button className="button button--close" id="delete${todo.id}"></button>
                </div>
                <input className="edit" value="${todo.task}"/>
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        handlerOnCheck: (id)=> dispatch(checkTodo(id))
    }
}
export default connect(null, mapDispatchToProps)(Todo)