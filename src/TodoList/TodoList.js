import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              className="input"
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
               />
            <button type="submit" class="btn btn-primary">Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList
