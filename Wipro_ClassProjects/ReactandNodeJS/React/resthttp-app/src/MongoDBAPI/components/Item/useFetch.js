import React,{ useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

function useFetch(url,options ={}){
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
   
    //Fetch Data
    const fetchData=async ()=>{
        setLoading(true);
        const url="http://localhost:5001/api/items";
        try{
            const response=await fetch(url,options);
            if(!response.ok){
                throw new Error(`HTTP Error! Status: ${response.status} ${response.statusText}`);
            }
            const result=await response.json();
            setData(result);

        }
        catch(err){
            setError(err);
            console.error('Fetch Error: ',err)

        }
        finally{
            setLoading(false);
        }
    };

    //Fetch Data by Id
    const fetchDataById=async(id)=>{
        setLoading(true);
        const url=`http://localhost:5001/api/items/${id}`;
        try{
            const response=await fetch(url,options);
            if(!response.ok){
                throw new Error(`HTTP Error! Status: ${response.status} ${response.statusText}`);
            }
            const result=await response.json();
            setData(result);

        }
        catch(err){
            setError(err);
            console.error('Fetch Error: ',err)

        }
        finally{
            setLoading(false);
        }
    };

    
    //Post Data
    const postData=async (newItem)=>{
       
        setLoading(true);
        const url="http://localhost:5001/api/items";
        try{
            const response=await fetch(url,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(newItem),
            });
            if(!response.ok){
                throw new Error(`HTTP Error! Status: ${response.status} ${response.statusText}`);
            }
            const result=await response.json();
            setData(result);
            alert("New Item Added");
            navigate("/");
              
           
        }
        catch(err){
            setError(err);
            console.error('Error posting new item: ',err);
        }
        finally{
            setLoading(false);
        }
    };

    //Update Data
    const updateData=async(updatedItem)=>{
        setLoading(true);
        const url=`http://localhost:5001/api/items`;
        try{
            const response=await fetch(`${url}/${updatedItem.id}`,{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(updatedItem),
            });
            if(!response.ok){
                throw new Error(`HTTP Error! Status: ${response.status} ${response.statusText}`);
            }
            const result=await response.json();
            setData(result);
            alert("Item Updated");
            navigate("/");
        }
        catch(err){
            setError(err);
            console.error('Error updating the item: ',err);
        }
        finally{
            setLoading(false);
        }
    };

    //Delete Data
    const deleteData=async (id)=>{
        setLoading(true);
        const url="http://localhost:5001/api/items";
        try{
            const response=await fetch(`${url}/${id}`,{
                method:'DELETE',
            });
            if(!response.ok){
                throw new Error(`HTTP Error! Status: ${response.status} ${response.statusText}`);
            }
            setData(data.filter(book=>book.id !== id));
        }
        catch(err){
            setError(err);
            console.error("Error deleting the item: ",err);
        }
        finally{
            setLoading(false);
        }
    };

    return {data,error,loading,fetchData,postData,updateData,deleteData,fetchDataById};
}

export default useFetch;
