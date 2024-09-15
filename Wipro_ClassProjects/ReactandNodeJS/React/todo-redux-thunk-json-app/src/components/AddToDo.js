import React,{useState} from 'react';
import { useDispatch} from 'react-redux';
import {addTodo} from '../actions/todoactions';

const AddToDo = () =>{
    const [text,setText]=useState('');
    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTodo({text,completed:false}));
        setText('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)}
            placeholder='Add a new todo'/>
            <button type='submit' className='btn btn-success btn-sm'>Add ToDo</button>
        </form>
    )
}

export default AddToDo;