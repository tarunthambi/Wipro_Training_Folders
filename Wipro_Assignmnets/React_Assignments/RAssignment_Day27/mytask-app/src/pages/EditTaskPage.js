import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTaskById, updateTask } from '../services/taskService';
import TaskForm from '../components/TaskForm';

const EditTaskPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const data = await getTaskById(id);
        setTask(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask(id, task);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  if (!task) return <p>Loading...</p>;

  return (
    <div className="Edittask container">
      <h2>Edit Task</h2>
      <TaskForm task={task} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditTaskPage;
