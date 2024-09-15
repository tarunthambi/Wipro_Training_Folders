
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [tasks,setTasks]=useState([]);
  const [newTask,setNewTask]=useState('');

  const addTask=()=>{
    if(newTask.trim()){
      setTasks([...tasks,newTask.trim()]);
      setNewTask('');
    }
  }

  const deleteTask=(index)=>{
    const updatedTask=tasks.filter((_,i)=>i !==index);
    setTasks(updatedTask);
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>To-Do List App</h1>
       <input type="text" value={newTask}
       onChange={(e)=>setNewTask(e.target.value)}
       placeholder='Enter e new taks'/>
       <button onClick={addTask}>Add Task</button>
       <ul>
        {tasks.map((task,index)=>(
          <li key={index}>
            {task}
            <button onClick={()=>deleteTask(index)}>Delete Task</button>
          </li>
        ))}
       </ul>
      </header>
    </div>
  );
}

export default App;