//UpdateBook.js
import React from "react";
import { useParams } from "react-router-dom";

const UpdateBook =()=>{
    const {id}=useParams();

    return(
        <div>
            <h2>Update Book {id}</h2>
            <form>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title"/>
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" name="author"/>
                </div>
                <button type="submit">Update Book</button>
            </form>
        </div>
    )
}
export default UpdateBook;