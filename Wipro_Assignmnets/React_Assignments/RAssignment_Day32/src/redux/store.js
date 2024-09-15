// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { tasksReducer } from './reducers';
import { projectsReducer } from './reducers';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  projects: projectsReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
