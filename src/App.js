import React, { Component } from 'react'
import './App.scss'
import TodoList from './TodoList/TodoList'
class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    console.log('Input')
  }
  addItem = () => {
    console.log('Add Item')
  }
  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem} />
      </div>
    )
  }
}
export default App
