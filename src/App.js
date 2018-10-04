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

    handleDelete = event => {
      var newTodoList = [...this.state.todos];
      var index = newTodoList.indexOf(event.target.value);
      newTodoList.splice(index, 1);
      this.setState({todos: newTodoList});
    };


      handleChangeName = event => {
          console.log("DELETE");
        };

  render() {
    return (
      <div>
        <h1> How to make boba at home</h1>
        {this.state.todos.map(todo => (
          <div>
           <li key={todo}>
             {todo + "  "}
             <input
               type="text"
               value={this.state.newTodo}
               onChange={this.handleChange}
             />
             <button onClick={this.handleChangeName()}>EDIT</button>
           </li>
         </div>
        ))}

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}> + </button>
        </form>
      </div>
    );
  }
}

export default App;
