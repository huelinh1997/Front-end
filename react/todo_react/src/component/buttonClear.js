import React from 'react'
import {connect} from "react-redux";
import {clearCompleted} from '../action/action'

class ButtonClear extends React.Component{
    render() {
        return (
            <button id="btnClearCompleted"
                    className="button button--clear"
                    onClick={()=> this.props.handlerOnClickClearBtn()}
            >Clear completed</button>
        )
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        handlerOnClickClearBtn: ()=> dispatch(clearCompleted())
    }
}
export default connect(null, mapDispatchToProps)(ButtonClear)