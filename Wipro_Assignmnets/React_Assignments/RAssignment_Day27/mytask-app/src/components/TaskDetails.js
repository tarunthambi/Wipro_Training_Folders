import React from 'react';

const TaskDetails = ({ task }) => {
  if (!task) return <p>Loading...</p>;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <p className="card-text">Status: {task.status}</p>
      </div>
    </div>
  );
};

export default TaskDetails;
