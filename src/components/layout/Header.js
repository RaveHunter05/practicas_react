import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header style={header}>
            <h2>TodoList</h2>
            <Link style={linkStyle} to="/"> Home </Link> | 
            <Link to="/about" style={linkStyle}> About </Link>
        </header>
    )
}

export default Header

const header = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff'
}