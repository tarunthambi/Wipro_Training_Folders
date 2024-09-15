import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchTodos } from "../actions/todoactions";
import { ToDoItem } from "./ToDoItem";
import './styles.css';

const ToDoList=()=>{
    const todos=useSelector(state=>state.todos);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchTodos());
    },[dispatch]);

    return(
        
        <table cellPadding={5} cellSpacing={5} border={1}>
            <tbody>
                {todos.map(todo=>(
                    <tr key={todo.id}>
                        <ToDoItem key={todo.id} todo={todo}/>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ToDoList;