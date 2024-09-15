import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask } from '../redux/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return(
  <div className='card'>
    <h3 className='card-header'>{task.title}</h3>
    <div className='card-body'>

    <p >{task.description}</p>
    <p >Status: {task.status}</p>
    <Link to={`/task/${task.id}`} >View Details</Link>
    <button className='btn btn-danger m-2' onClick={()=>{dispatch(deleteTask(task.id))}}>Delete</button>
    </div>
  </div>)
};

export default Task;
