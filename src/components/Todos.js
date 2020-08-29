import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todos extends Component {
    
    render() {
        return (
            <div>
                {this.props.todo.map(todo=>(
                    <TodoItem key={todo.id} todo={todo}/>
                ))}
                
            </div>
        )
    }
}


export default Todos