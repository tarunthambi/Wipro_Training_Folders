import React, { useState } from "react";
import useFetch from "./useFetch";

const AddItem=()=>{
    const [itemId,setItemId]=useState('');
    const [itemName,setItemName]=useState('');
    const [price,setPrice]=useState('');
    const {error,loading,postData}
    =useFetch("http://localhost:5000/api/items");


    const handleSubmit=(e)=>{
        e.preventDefault();
        const newItem={itemId,itemName,price};
        postData(newItem);

    }

    return(
       
        <div>
            <h1 style={{textAlign:'center',color:'darkgoldenrod'}}>Add New Item</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td><label>Item Id:</label></td>
                            <td><input type="number" 
                            required 
                            value={itemId} 
                            onChange={(e)=>setItemId(e.target.value)}>
                            </input>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Item Name:</label></td>
                            <td><input type="text" 
                            required 
                            value={itemName} 
                            onChange={(e)=>setItemName(e.target.value)}>
                            </input>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Price:</label></td>
                            <td><input type="number" 
                            required 
                            value={price} 
                            onChange={(e)=>setPrice(e.target.value)}>
                            </input>
                            </td>
                        </tr>
                        <tr>
                            <td><button type="submit" className="btn btn-success btn-sm">Add Item</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div> 
    );
};

export default AddItem;
