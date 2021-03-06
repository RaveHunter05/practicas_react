import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'


import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import './App.css'

class App extends Component {
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(x => {
        if (x.id === id) {
          x.completed = !x.completed
        }
        return x
      })
    })
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/
    ${id}`)
    .then(res=> this.setState({
      todos: [...this.state.todos.filter(todo => {
        return todo.id !== id;
      })]
    }))
  }

  addTodo = (title) => {
    // const newTodo = {
    //   id: uuidv4(),
    //   title: title,
    //   completed: false
    // }
    // this.setState({
    //   todos: [...this.state.todos, newTodo]
    // })
    // this.setState({
    //   todos: [...this.state.todos, valor]
    // })
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res=> this.setState({
      todos: [...this.state.todos, res.data]
    }))
    
  }

  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {
      res.data.map(x=>{
        this.setState({
          todos: [...this.state.todos, x]
        })
      })
    })
  }

  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <Header />
            <Route path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todo={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
            <Route path='/about' component={About}/>
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
