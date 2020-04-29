import React from 'react'
import ButtonClear from './buttonClear'
import {
    Link
} from "react-router-dom";
import {connect} from "react-redux";
import {changeFilter} from '../action/action'

class Footer extends React.Component{
    constructor() {
        super()
        this.filterElement = React.createRef()
    }
    componentDidMount() {
        let el_status = document.querySelector(`[id="${this.props.filterStatus}"]`);
        (el_status && el_status.classList.add('selected'))
    }
    componentDidUpdate() {
        let filter = this.filterElement.current.children;
        for(let item of filter) {
            item.children[0].classList.remove('selected');
        }
        document.querySelector(`[id="${this.props.filterStatus}"]`).classList.add('selected');
    }

    render() {
        let itemLeft = this.props.todos.filter(item=>!item.hasDone)
        return (
            <footer className="footer" id="footer">
                <span id="todoCount">{itemLeft.length} items left</span>
                <ul className="filter" ref={this.filterElement}>
                    <li>
                        <Link to='/' onClick={()=> this.props.handlerOnClick('all')} className="filter__item" id="all">All</Link>
                    </li>
                    <li>
                        <Link to='/active'  onClick={()=> this.props.handlerOnClick('active')} className="filter__item" id="active">Active</Link>
                    </li>
                    <li>
                        <Link to='/completed'  onClick={()=> this.props.handlerOnClick('completed')} className="filter__item" id="completed">Completed</Link>
                    </li>
                </ul>
                {itemLeft.length < this.props.todos.length && <ButtonClear/>}
            </footer>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        todos: state.todos,
        filterStatus: state.filterStatus
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        handlerOnClick: (id)=> dispatch(changeFilter(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)