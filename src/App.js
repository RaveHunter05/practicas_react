import React, {Component} from 'react';
import './App.css'
import Todos from './components/Todos'

class App extends Component {
  state={
    todos:[
        {
            id:1,
            title: 'Take out the trash',
            completed: false
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
        <h2>Buongiorno</h2>
        <Todos todo={this.state.todos}/>
      </div>
    );
  }
}

export default App;
