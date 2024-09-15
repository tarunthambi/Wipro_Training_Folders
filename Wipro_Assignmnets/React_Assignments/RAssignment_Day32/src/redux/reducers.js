
import {
    ADD_TASK,
    UPDATE_TASK,
    DELETE_TASK,
    ADD_PROJECT,
    FETCH_TASK,
    FETCH_PROJECT
  } from './actions';
  
  // Initial States
  const initialTasksState = [];
  const initialProjectsState = [];
  
  // Tasks Reducer
  export const tasksReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_TASK:
        return [...state, action.payload];
      case UPDATE_TASK:
        return state.map(task => task.id === action.payload.id ? action.payload : task);
      case FETCH_TASK:
        console.log("playload", action.payload);
        return action.payload;
      case DELETE_TASK:
        var d = state.filter(task=>task.id !==action.payload);
        return d;
      default:
        return state;
    }
  };
  
  
  export const projectsReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_PROJECT:
        console.log("add Project", action.payload);
        return [...state, action.payload];
      case FETCH_PROJECT:
        console.log("Fetch project",action.payload)
        return action.payload;
      default:
        return state;
    }
  };
  