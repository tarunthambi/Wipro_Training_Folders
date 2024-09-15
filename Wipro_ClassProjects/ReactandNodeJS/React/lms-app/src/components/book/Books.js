//Books.js
import React from "react";
import {Link} from 'react-router-dom';

const Books=()=>{
    const books=[
        {id:1,title:'Learn React Basics'},
        {id:2,title:'Learn React Advanced'},
        {id:3,title:'Learn Redux'},
    ];

    return(
        <div>
            <h2>Books</h2>
            <ul>
                {books.map(b=>(
                    <li key={b.id}>
                        <Link to = {`/books/${b.id}`}>{b.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Books;