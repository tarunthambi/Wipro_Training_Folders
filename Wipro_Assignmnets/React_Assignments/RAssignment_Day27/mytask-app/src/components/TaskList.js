import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul className="list-group mt-3">
      {tasks.map(task => (
        <li key={task.id} className="list-group-item">
          <h5>{task.title}</h5>
          <p>{task.description}</p>
          <span>Status: {task.status}</span><br/>
          <Link to={`/editTask/${task.id}`} className="btn btn-warning btn-sm mx-2">Edit</Link>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(task.id)}>Delete</button>
          <Link to={`/displayTask/${task.id}`} className="btn btn-info btn-sm mx-2">View</Link>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
