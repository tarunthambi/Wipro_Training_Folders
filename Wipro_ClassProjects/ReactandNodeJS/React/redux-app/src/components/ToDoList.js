import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo } from "../redux/actions/toDoActions";
import ToDoItem from "./ToDoItem";

const ToDoList=()=>{
    const [text,setText]=useState('');
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todos);

    const handleAddTodo =()=>{
        if(text.trim()){
            dispatch(addTodo(text));
            setText('');
        }
    }

   return(
        <div>
            <h1>To-Do List</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add a new task"/>
            <button onClick={handleAddTodo}>Add Task</button>
            <table style={{margin:'auto'}}>
                <tbody>
                    {todos.map((todo)=>(
                        <tr key={todo.id}>
                            <td><ToDoItem key={todo.id} todo={todo}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default ToDoList;