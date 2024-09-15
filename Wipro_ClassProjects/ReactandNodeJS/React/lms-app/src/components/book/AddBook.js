//AddBook.js
import React from "react";

const AddBook=()=>{
    return(
        <div>
            <form>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" required/>
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" name="author" required/>
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}

export default AddBook;