import {createStore} from 'redux';
import toDoReducer from './reducers/toDoReducer';

const store=createStore(toDoReducer);

export default store;