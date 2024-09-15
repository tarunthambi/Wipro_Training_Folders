import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { Navigate } from "react-router-dom";
// import '../styles/Item.css';

const Items=()=>{
    const {data:items,error,loading,fetchData,deleteData}
    =useFetch("http://localhost:5001/api/items");

    useEffect(()=>{
        fetchData();
    },[]);


    const navigate=useNavigate();

    const handleUpdate=(id)=>{
        if(window.confirm('Are you sure you want to edit the item?')){
            //window.location.href=`/update-book/${id}`;
            navigate(`/update-item/${id}`)

        }
    }

    const handleDelete=(id)=>{
        if(window.confirm('Are you sure you want to delete this item?')){
            deleteData(id);
        }
    }

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return(
        <div>
            <h1 style={{textAlign:'center',color:'darkgoldenrod'}}>Item Details</h1>
            <table style={{marginLeft:'auto',marginRight:'auto'}} border={3} cellPadding={5} cellSpacing={5} bordercolor="black">
                <tbody>
                    <tr>
                        <th>KeyID</th>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th>Price</th>                       
                        <th style={{textAlign:'center'}}>Actions</th>
                    </tr>
                    {items && items.map(item=>(
                        <tr key={item._id}>
                            <td><Link to={`/api/items/${item._id}`}>{item._id}</Link></td>
                            <td>{item.itemId}</td>
                            <td>{item.itemName}</td>
                            <td>{item.price}</td>
                            <td><button className="btn btn-primary btn-sm" onClick={()=>handleUpdate(item._id)}>Edit</button></td>
                            <td><button className="btn btn-danger btn-sm" onClick={()=>handleDelete(item._id)}> Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Items;
