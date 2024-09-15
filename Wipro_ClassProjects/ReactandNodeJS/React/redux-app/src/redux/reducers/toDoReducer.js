import { ADD_TODO,REMOVE_TODO,TOGGLE_TODO } from "../actions/toDoActions";

const initialState={
    todos:[]
};

let nextId=1;

const toDoReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos:[
                    ...state.todos,
                    {id:nextId++,text:action.payload,completed:false},
                ],
            };
        case REMOVE_TODO:
            return{
                ...state,
                todos:state.todos.filter(todo=>todo.id !== action.payload),

            };
            case TOGGLE_TODO:
                return{
                    ...state,
                    todos:state.todos.map(todo=>
                        todo.id===action.payload
                        ?{...todo,completed: !todo.completed}
                        :todo
                    )
    
                };
        default:
            return state;
    };
};

export default toDoReducer;