import React, { Component } from "react";
class App extends Component {
  state = {
    newTodo: "",
    todos: [
      "Buy tea",
      "Buy boba",
      "Boil water",
      "Add boba",
      "Drain water",
      "Add tea"
    ]
  };

  handleChange = event => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ""
    });
  };

  render() {
    return (
      <div>
        <h1> How to make boba at home</h1>
        {this.state.todos.map(todo => (
          <li key={todo}> {todo}</li>
        ))}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}> + </button>
        </form
      </div>
    );
  }
}

export default App;
