import axios from 'axios';

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const FETCH_TASK = "FETCH_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const ADD_PROJECT = 'ADD_PROJECT';
export const FETCH_PROJECT = 'FETCH_PROJECT';


export const addTask = (task) => async dispatch=>{
  axios.post("http://localhost:4000/Task",task);
  dispatch({type: ADD_TASK, payload: task})};

export const updateTask = (task) => async dispatch=>{ 
  const r=axios.put(`http://localhost:4000/Task/${task.id}`,task).then(res=>console.log(res));
  dispatch({type: UPDATE_TASK,payload: task})};
export const fetchTask = () => async dispatch=>{
  const res = axios.get("http://localhost:4000/Task").then(r=>
  
  dispatch({type:FETCH_TASK, payload:r.data}))
}
export const deleteTask=(id)=>async dispatch=>{
  axios.delete(`http://localhost:4000/Task/${id}`);
  dispatch({type:DELETE_TASK,playload:id})
}

export const addProject = (project) =>async dispatch=>{
  axios.post("http://localhost:4000/project",project).then(r=>console.log("response",r,"project",project));
  dispatch({type: ADD_PROJECT,  payload: project});}

export const fetchProject = () => async dispatch=>{
  const r = axios.get("http://localhost:4000/project").then(res=>dispatch({type:FETCH_PROJECT,payload:res.data}))
}