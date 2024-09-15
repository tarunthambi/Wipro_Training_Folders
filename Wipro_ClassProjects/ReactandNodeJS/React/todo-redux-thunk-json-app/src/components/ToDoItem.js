import React from "react"
import { useDispatch } from "react-redux"
import { toggleTodo,deleteTodo } from "../actions/todoactions"
import './styles.css';

export const ToDoItem=({todo})=>{

    const dispatch=useDispatch();

    const handleToggle=()=>{
        dispatch(toggleTodo(todo.id,!todo.completed));
    };

    const handleDelete=()=>{
        dispatch(deleteTodo(todo.id));
    };

    return(
        
            <>
            <td>
                <span onClick={handleToggle} 
                style={{textDecoration:todo.completed ? 'line-through':'none'}}>
                    <p>Title: {todo.title}<br/>Author: {todo.author}</p>
                </span>
            </td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
            </td>
            </>
        
    )
}