import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../services/taskService';
import TaskForm from '../components/TaskForm';

const CreateTaskPage = () => {
  const [task, setTask] = useState({ title: '', description: '', status: 'Pending' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(task);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Createtask container">
      <h2>Create New Task</h2>
      <TaskForm task={task} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateTaskPage;
