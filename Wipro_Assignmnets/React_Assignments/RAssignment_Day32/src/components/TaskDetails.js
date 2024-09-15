import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { markTaskComplete, updateTask } from '../redux/actions';

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector(state => state.tasks.find(task => task.id === id));

  const handleComplete = () => {
    task.status = "Completed";
    dispatch(updateTask(task));
    navigate('/');
  };

  const handleEdit = () => {
    navigate(`/task/edit/${id}`);
  };

  return (
    <div>
      {task ? (
        <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleComplete}>Mark as Complete</button>
        </div>
      ) : (
        <p>Task not found.</p>
      )}
    </div>
  );
};

export default TaskDetails;
