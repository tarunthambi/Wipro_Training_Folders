import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const UpdateItem=()=>{
    const {id} =useParams();
    const {data:item,error,loading,fetchData,fetchDataById,updateData}
    =useFetch(`http://localhost:5001/api/items/${id}`);

    const [itemId,setItemId]=useState('');
    const [itemName,setItemName]=useState('');
    const [price,setPrice]=useState('');

    useEffect(()=>{
        fetchDataById(id);
    },[]);

    useEffect(()=>{
        if(item){
            setItemId(item.itemId)
            setItemName(item.itemName)
            setPrice(item.price)
        }
    },[item]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const updateItem={id,itemId,itemName,price};
        updateData(updateItem);
    }

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return(
        <div>
            <h1 style={{textAlign:'center',color:'darkgoldenrod'}}>Update Book</h1>
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
                            <td><button type="submit" className="btn btn-info btn-sm">Update Item</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </form>
            </div>
    )

}

export default UpdateItem;
