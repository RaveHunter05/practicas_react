import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {
    render() {
        return (
            <div>
                {this.props.todo.map(todo=>(
                    <TodoItem 
                    key = {todo.id}
                    todo = {todo}
                    markComplete = {this.props.markComplete}
                    delTodo={this.props.delTodo}
                    />
                ))}
                
            </div>
        )
    }
}

Todos.propTypes = {
    todo: PropTypes.array.isRequired
}

export default Todos