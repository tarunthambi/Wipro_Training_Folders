import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDolist';

function App() {
  return (
    <div className='App'>
      <h1 style={{color:'blue'}}>Todo List App</h1>
      <AddToDo/>
      <ToDoList/>
    </div>
  );
}

export default App;