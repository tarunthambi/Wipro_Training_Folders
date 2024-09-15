import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Task from './Task';
import { addProject, fetchProject, fetchTask } from '../redux/actions';

const Dashboard = () => {
  const tasks = useSelector(state => state.tasks);
  const projects = useSelector(state => state.projects);
  const Navigation = useNavigate();
  console.log(tasks);
  const categorizeTasks = (status) => tasks.filter(task => task.status === status);
  const [projectId,setProjectId] = useState(0);
  const [projectName,setProjectIdName] = useState("");
  const dispatch = useDispatch();
  const handleProject =()=>{
    const project ={
      id:projectId,
      name:projectName
    }
    console.log('project2',project);
    dispatch(addProject(project));
  }

  useEffect(()=>{
    dispatch(fetchTask());
    dispatch(fetchProject());
  },[])

  return (
    <div>
      <button className='btn btn-secondary' onClick={()=>Navigation('/task/create')}>Create Task</button>
      <h1>Dashboard</h1>
      <div className='container'>
          Project Id: <input onChange={(e)=>setProjectId(e.target.value)} type='text'/>&nbsp;&nbsp;&nbsp;
          Project Name: <input onChange={(e)=>setProjectIdName(e.target.value)} type='text'/>&nbsp;&nbsp;&nbsp;
          <button className='btn btn-outline-primary' onClick={handleProject}>Add project</button>
      </div>
      <div className='row'>
          
      <div className='col-4'>
        <h2>To Do</h2>
        {categorizeTasks('To Do').map(task => <Task key={task.id} task={task} />)}
      </div>
      <div className='col-4'>
        <h2>In Progress</h2>
        {categorizeTasks('In Progress').map(task => <Task key={task.id} task={task} />)}
      </div>
      <div className='col-4'>
        <h2>Completed</h2>
        {categorizeTasks('Completed').map(task => <Task key={task.id} task={task} />)}
      </div>
      </div>
      <div>
        <h2>Projects</h2>
        {projects.map(project => (
          <div key={project.id}>
            <Link to={`/project/${project.id}`}>{project.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
