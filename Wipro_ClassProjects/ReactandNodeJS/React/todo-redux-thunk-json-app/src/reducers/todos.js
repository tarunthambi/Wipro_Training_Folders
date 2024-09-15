import { FETCH_TODOS,ADD_TODO,TOGGLE_TODO,DELETE_TODO } from "../actions/todoactions";

const todos=(state = [],action)=>{
    switch(action.type){
        case FETCH_TODOS:
            return action.payload;
        case ADD_TODO:
            return [...state,action.payload];
        case TOGGLE_TODO:
            return state.map(todo=>
                todo.id===action.payload.id ? action.payload:todo
            );
        case DELETE_TODO:
            return state.filter(todo=>todo.id !== action.payload);
        default:
            return state;
    }
}

export default todos;