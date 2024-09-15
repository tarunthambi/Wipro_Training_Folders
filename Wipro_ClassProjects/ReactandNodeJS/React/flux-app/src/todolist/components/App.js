import React, { Component } from 'react';
import TodoList from '../components/ToDoList'
import todoStore from '../stores/ToDoStore';
import { ToDoActions } from '../actions/ToDoActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoStore.getAll(),
      newTodo: ''
    };
  }

  componentDidMount() {
    todoStore.addChangeListener(this.handleStoreChange);
  }

  componentWillUnmount() {
    todoStore.removeChangeListener(this.handleStoreChange);
  }

  handleStoreChange = () => {
    this.setState({ todos: todoStore.getAll() });
  };

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    if (this.state.newTodo.trim()) {
      ToDoActions.addTodo(this.state.newTodo);
      this.setState({ newTodo: '' });
    }
  };

  handleRemoveTodo = (index) => {
    ToDoActions.removeTodo(index);
  };

  render() {
    return (
      <div style={{textAlign:'center',margin:20}}>
        <h1 style={{color:'blue'}}>Todo List App</h1>        
        <input style={{border:'1px solid black'}}
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
          placeholder="Enter a todo"
        /> &nbsp;
        <button onClick={this.handleAddTodo} className='btn btn-primary btn-info'>Add Todo</button>
        <TodoList todos={this.state.todos} onRemoveTodo={this.handleRemoveTodo} />
       
      </div>
    );
  }
}

export default App;
