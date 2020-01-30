import React from 'react'
import {
    Link
} from "react-router-dom";
import {connect} from "react-redux";

class Footer extends React.Component{
    render() {
        let itemLeft = this.props.todos.filter(item=>!item.hasDone)
        return (
            <footer className="footer" id="footer">
                <span id="todoCount">{itemLeft.length} items</span>
                <ul className="filter">
                    <li>
                        <Link to='/' className="filter__item" id="all">All</Link>
                        {/*<a href="#/" className="filter__item" id="all">All</a>*/}
                    </li>
                    <li>
                        <Link to='/active' className="filter__item" id="active">Active</Link>
                        {/*<a href="#/active" className="filter__item" id="active">Active</a>*/}
                    </li>
                    <li>
                        <Link to='/completed' className="filter__item" id="completed">Completed</Link>
                        {/*<a href="#/completed" className="filter__item" id="completed">Completed</a>*/}
                    </li>
                </ul>
            </footer>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps)(Footer)