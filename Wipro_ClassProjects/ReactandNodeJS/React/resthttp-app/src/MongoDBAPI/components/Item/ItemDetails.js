
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


const ItemDetails=()=>{
    const {id} =useParams() //Get the Item id from the URL
    const [item,setItem]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const fetchItems=async()=>{
            try{
                const response=await fetch(`http://localhost:5001/api/items/${id}`);
                if(!response.ok){
                    throw new Error(`HTTP Error: Status: ${response.status}`);
                }
                const data=await response.json();
                setItem(data);
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }        
    };
    fetchItems();
},[id]);

if(loading) return<p>Loading...</p>
if(error) return <p>Error: {error}</p>
if(!item) return <p>Item Not Found</p>

return(
    <div>
       <h5 style={{color:'darkgoldenrod'}}>Details for Item Id {id}</h5>
       <br/>
        <table border={2} cellSpacing={5} cellPadding={5} >
        <tr>
                <th>Item Id: {item.itemId}</th>
            </tr>
            <tr>
                <th>Item Name: {item.itemName}</th>
            </tr>
            <tr>
                <th>Price: {item.price}</th>
            </tr>         
            
        </table>
        <br/>
        <a href="/" style={{textAlign:'center'}}>Back to List</a>  
    </div>
    )

};

export default ItemDetails;
