import React from 'react';
import {useDispatch} from 'react-redux';
import {removeTodo,toggleTodo } from '../redux/actions/toDoActions';

const ToDoItem=({todo})=>{
    const dispatch=useDispatch();

    return(
        <li>     
            <span style={{textDecoration:todo.completed? 'line-through':'none'}}
            onClick={()=>dispatch(toggleTodo(todo.id))}
            > 

            {todo.text}                   
            </span>
            
            <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
    )
}

export default ToDoItem;