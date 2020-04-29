import React from 'react'
import {connect} from "react-redux";
import {checkTodo, deleteTodo, editTask, updateTask} from '../action/action'


class Todo extends React.Component{
    constructor() {
        super();
        this.checkboxElement = React.createRef()
        this.todoElement = React.createRef()
        this.editInputElement = React.createRef()
    }
    componentDidMount() {
        let {hasDone} = this.props.todo;
        if(hasDone) {
            this.checkboxElement.current.checked = true
        } else {
            this.checkboxElement.current.checked = false
        }
    }

    componentDidUpdate() {
        let {hasDone, isEdit} = this.props.todo;
        // update when check
        if(hasDone) {
            this.checkboxElement.current.checked = true
        } else {
            this.checkboxElement.current.checked = false
        }
        // update when edit
        if(isEdit) {
            this.todoElement.current.classList.add('editing');
            this.editInputElement.current.focus()
        } else {
            this.todoElement.current.classList.remove('editing');
        }
    }


    render() {
        let {id, task, hasDone} = this.props.todo;
        let completed = hasDone ? 'completed': '';
        return (
            <li ref={this.todoElement} className={completed}>
                <div className="todoItem__wrap">
                    <input className="toggle" type="checkbox" name="check"
                           onClick={()=> this.props.handlerOnCheck(id)}
                           ref={this.checkboxElement}/>
                        <label className="desTodo"
                               onDoubleClick={()=>this.props.handlerEditTask(id)}>{task}</label>
                        <button className="button button--close"
                                onClick={()=>this.props.handlerOnDelete(id)}></button>
                </div>
                <input className="edit"
                       defaultValue={task}
                       ref={this.editInputElement}
                       onKeyUp={(e)=> {
                           if(e.keyCode === 13) {
                                this.props.handlerUpdate(id, this.editInputElement.current.value)
                            }
                       }}
                       onBlur={()=> this.props.handlerUpdate(id, this.editInputElement.current.value)}/>
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        handlerOnCheck: (id)=> dispatch(checkTodo(id)),
        handlerOnDelete: (id)=> dispatch(deleteTodo(id)),
        handlerEditTask: (id)=> dispatch(editTask(id)),
        handlerUpdate: (id, newTask)=> dispatch(updateTask(id, newTask))
    }
}

export default connect(null, mapDispatchToProps)(Todo)