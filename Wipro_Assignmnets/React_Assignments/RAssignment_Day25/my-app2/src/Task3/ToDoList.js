import React, { useState } from 'react';
import './ToDoList.css';

const TodoList = ({ onTasksUpdate }) => {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    onTasksUpdate(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    onTasksUpdate(updatedTasks);
  };

  const handleAddTask = () => {
    if (newTaskText.trim() === '') return;
    const newTask = { id: Date.now(), text: newTaskText, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    onTasksUpdate(updatedTasks);
    setNewTaskText('');
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        className="todo-input"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="todo-button" onClick={handleAddTask}>Add Task</button>

      <ul className="todo-list">
        {tasks.map(task => (
          <li key={task.id} className="todo-item">
            <input
              type="checkbox"
              className="todo-checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(task.id)}
            />
            <span
              className={`todo-text ${task.completed ? 'completed' : ''}`}
            >
              {task.text}
            </span>
            <button className="delete-button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
