import React from 'react'
import {connect} from "react-redux";
import {addTodo} from '../action/action'

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            task: ''
        }
    }

    handlerOnChange(e) {
        this.setState({
            task: e.target.value
        })
    }

    clearState = ()=>{
        this.setState({
            task: ""
        })
    }

    render() {
        const ENTER = 13;
        return (
            <header className="header">
                <input className="newToDo"
                       id="newToDo"
                       type="text"
                       placeholder="What needs to be done?"
                       value={this.state.task}
                       onChange={this.handlerOnChange.bind(this)}
                       onKeyUp={(e)=>{
                           if(e.keyCode === ENTER) {
                               this.props.handlerEnter(this.state.task)
                               this.clearState()
                           }
                       }}/>
            </header>

        )
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        handlerEnter: (task)=> (dispatch(addTodo(task)))
    }
}
export default connect(null, mapDispatchToProps)(Header)