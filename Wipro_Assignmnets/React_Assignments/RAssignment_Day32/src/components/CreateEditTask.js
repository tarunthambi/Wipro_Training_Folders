import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, addTask, updateTask } from '../redux/actions.js';

const CreateEditTask = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector(state => state.tasks.find(task => task.id === id)) || {};
  const [title, setTitle] = useState(task.title || '');
  const [description, setDescription] = useState('' );
  const [dueDate, setDueDate] = useState( '');
  const [status, setStatus] = useState('To Do');
  const [projectId, setProjectId] = useState( '');

  useEffect(() => {
    if (task.title !== undefined) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
      setStatus(task.status);
      setProjectId(task.projectId);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { id: task.id || Date.now().toString(), title:title, description:description, dueDate:dueDate, status:status, projectId:projectId };

    console.log(taskData,"title",title);
    if (task.id) {
            dispatch(updateTask(taskData));
    } else {
      
      dispatch(addTask(taskData));
    }
    navigate('/');
  };

  return (
    <div>
      <h1>{task.id ? 'Edit Task' : 'Create Task'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => {setTitle(e.target.value);console.log(title)}} required /><br/>
        </label><br/>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} /><br/>
        </label><br/>
        <label>
          Due Date:
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} /><br/>
        </label><br/>
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label><br/>
        <label>
          Project:
          <input type="text" value={projectId} onChange={(e) => setProjectId(e.target.value)}  placeholder='project Id'/>
        </label><br/>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateEditTask;
