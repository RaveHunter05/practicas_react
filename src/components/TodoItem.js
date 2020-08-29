import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
    // markComplete = (e) =>{
    //     this.props.todo.completed = !this.props.completed
    // }

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const { id, title, completed } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox"
                        onChange={this.props.markComplete.bind(this, id)}
                        defaultChecked={completed}
                    /> {' '}
                    {title}
                    <button
                        style={btnStyle}
                        onClick={this.props.delTodo.bind(this, id)}
                    >
                        {id}
                    </button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50px',
    cursor: 'pointer',
    float: 'right'
}