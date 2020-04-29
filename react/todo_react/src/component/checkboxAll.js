import React from 'react'
import {connect} from "react-redux";
import {checkAllTodo} from '../action/action'

class CheckboxAll extends React.Component{
    constructor(props) {
        super(props)
        this.toggleAllElement = React.createRef()
    }
    componentDidMount() {
        if(this.props.isCheckAll) {
            this.toggleAllElement.current.checked = true
        } else this.toggleAllElement.current.checked = false
    }

    componentDidUpdate() {
        if(this.props.isCheckAll) {
            this.toggleAllElement.current.checked = true
        } else this.toggleAllElement.current.checked = false
    }

    render() {
        return (
            <div id="checkAll">
                <input className="toggle-all" type="checkbox" id="toggle-all"
                       ref={this.toggleAllElement}
                       onClick={()=> this.props.handlerOnCheckAll()} />
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
        todos: state.todos,
        isCheckAll: state.isCheckAll
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckboxAll)