import React from 'react'
import {connect} from "react-redux";
import {checkAllTodo} from '../action/action'

class CheckboxAll extends React.Component{
    componentDidMount() {
        console.log('did mount')
        let listTodo = this.props.todos;
        let listHasDone = listTodo.filter(item=>item.hasDone)
        if(listHasDone.length === listTodo.length) {
            document.getElementById('toggle-all').checked = true
        } else document.getElementById('toggle-all').checked = false
    }

    render() {
        return (
            <div id="checkAll">
                <input onClick={()=> this.props.handlerOnCheckAll()} type="checkbox" id="toggle-all" className="toggle-all"/>
                <label for="toggle-all"></label>


            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        handlerOnCheckAll: ()=> dispatch(checkAllTodo())
    }
}

const mapStateToProps = (state)=> {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckboxAll)