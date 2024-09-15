import React from 'react';

const TaskForm = ({ task, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={task.title}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          className="form-control"
          name="description"
          value={task.description}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Status</label>
        <select
          className="form-control"
          name="status"
          value={task.status}
          onChange={onChange}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default TaskForm;
