import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTasks, deleteTask } from '../services/taskService';
import TaskList from '../components/TaskList';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Homepage container">
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control mb-3"
      />
      <Link to="/createTask" className="btn btn-primary mb-3">Create New Task</Link>
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
