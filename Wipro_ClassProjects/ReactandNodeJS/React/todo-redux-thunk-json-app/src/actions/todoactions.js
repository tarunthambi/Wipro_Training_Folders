import axios from 'axios';

export const FETCH_TODOS="FETCH_TODOS";
export const ADD_TODO="ADD_TODO";
export const TOGGLE_TODO="TOGGLE_TODO";
export const DELETE_TODO="DELETE_TODO";

//Fetch
// export const fetchTodos=()=>async dispatch=>{
//     const response=await axios.get('http://localhost:5000/todos');
//     dispatch({type:FETCH_TODOS,payload:response.data});
// };
export const fetchTodos=()=>async dispatch=>{
    const response=await axios.get('https://freetestapi.com/api/v1/books');
    dispatch({type:FETCH_TODOS,payload:response.data});
};

//Add
// export const addTodo=(todo)=>async dispatch=>{
//     const response=await axios.post('http://localhost:5000/todos',todo);
//     dispatch({type:ADD_TODO,payload:response.data});
// };
export const addTodo=(todo)=>async dispatch=>{
    const response=await axios.post('https://freetestapi.com/api/v1/books',todo);
    dispatch({type:ADD_TODO,payload:response.data});
};

//Toggle
// export const toggleTodo=(id,completed)=>async dispatch=>{
//     const response=await axios.patch(`http://localhost:5000/todos/${id}`,{completed});
//     dispatch({type:TOGGLE_TODO,payload:response.data});
// };
export const toggleTodo=(id,completed)=>async dispatch=>{
    const response=await axios.patch(`https://freetestapi.com/api/v1/books/${id}`,{completed});
    dispatch({type:TOGGLE_TODO,payload:response.data});
};

//Delete
// export const deleteTodo=(id)=>async dispatch=>{
//     await axios.delete(`http://localhost:5000/todos/${id}`);
//     dispatch({type:DELETE_TODO,payload:id});
// };
export const deleteTodo=(id)=>async dispatch=>{
    await axios.delete(`https://freetestapi.com/api/v1/books/${id}`);
    dispatch({type:DELETE_TODO,payload:id});
};