import React, {Component} from 'react';
import './App.css'
import Todos from './components/Todos'
import Header from './components/layout/Header'

class App extends Component {
  markComplete = (id) =>{
    this.setState({
      todos: this.state.todos.map(x=>{
        if(x.id ===  id){
          x.completed = !x.completed
        }
        return x
      })
    })
  }

  delTodo = (id) =>{
    this.setState({
      todos: [...this.state.todos.filter(todo=>{
        return todo.id !== id;
      })]
    })
  }

  state={
    todos:[
        {
            id:1,
            title: 'Take out the trash',
            completed: true
        },
        {
            id:2,
            title: 'Take out the dog',
            completed: false
        },
        {
            id:3,
            title: 'Hunt rats',
            completed: false
        },
        {
            id:4,
            title: 'Kill Yorm the giant',
            completed: false
        }
    ]
  }
  render(){
    return (
      <div>
        <Header/>
        <Todos 
        todo={this.state.todos}
        markComplete = {this.markComplete}
        delTodo = {this.delTodo}
        />
      </div>
    );
  }
}

export default App;
