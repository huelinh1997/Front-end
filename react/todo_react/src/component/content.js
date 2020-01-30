import React from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'
import {connect} from "react-redux";

class Content extends React.Component {
    render() {
        let listTodo = this.props.todos;
        return (
            <div className="todo" id="todo">
                <Header/>
                <Main/>
                {listTodo.length > 0 && <Footer/>}
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps)(Content)