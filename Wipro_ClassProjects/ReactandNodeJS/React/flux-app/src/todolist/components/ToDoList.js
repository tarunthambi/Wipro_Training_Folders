import React from 'react';

const TodoList = ({ todos, onRemoveTodo }) => (  
   <table style={{alignContent:'center'}} cellPadding={4} cellSpacing={4} align='center'>
    <tbody>
    {todos.map((todo, index) => (
      <tr key={index}>
        <td>{todo}</td>
        <td><button onClick={() => onRemoveTodo(index)} className='btn btn-danger btn-sm'>Remove</button></td>
      </tr>
    ))}
    </tbody>
    </table>
);

export default TodoList;