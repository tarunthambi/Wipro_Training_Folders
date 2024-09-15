import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Task from './Task';

const Project = () => {
  const { id } = useParams();
  const tasks = useSelector(state => state.tasks.filter(task => task.projectId === id));
  const project = useSelector(state =>state.projects.find(project => project.id === id));
  console.log("project ",project);

  return (
    <div>
      <h1>{project ? project.name : 'Project Not Found'}</h1>
      <Link to={`/task/create?project=${id}`}>Add Task</Link>
      <div>
        <h2>To Do</h2>
        {tasks.filter(task => task.status === 'To Do').map(task => <Task key={task.id} task={task} />)}
      </div>
      <div>
        <h2>In Progress</h2>
        {tasks.filter(task => task.status === 'In Progress').map(task => <Task key={task.id} task={task} />)}
      </div>
      <div>
        <h2>Completed</h2>
        {tasks.filter(task => task.status === 'Completed').map(task => <Task key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default Project;
