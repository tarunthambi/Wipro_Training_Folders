//useFetch.js
import React,{ useState } from 'react';

function useFetch(url,options ={}){
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);

    //Fetch Data
    const fetchData=async ()=>{
        setLoading(true);
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
            console.error('Feth Error: ',err)

        }
        finally{
            setLoading(false);
        }
    };

    //Post Data
    const postData=async (newBook)=>{
        setLoading(true);
        try{
            const response=await fetch(url,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(newBook),
            });
            if(!response.ok){
                throw new Error(`HTTP Error! Status: ${response.status} ${response.statusText}`);
            }
            const result=await response.json();
            setData(result);
        }
        catch(err){
            setError(err);
            console.error('Error posting new book: ',err);
        }
        finally{
            setLoading(false);
        }
    };

    //Update Data
    const updateData=async(updatedBook)=>{
        setLoading(true);
        try{
            const response=await fetch(`${url}/${updatedBook.id}`,{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(updatedBook),
            });
            if(!response.ok){
                throw new Error(`HTTP Error! Status: ${response.status} ${response.statusText}`);
            }
            const result=await response.json();
            setData(result);
        }
        catch(err){
            setError(err);
            console.error('Error updating the book: ',err);
        }
        finally{
            setLoading(false);
        }
    };

    //Delete Data
    const deleteData=async (id)=>{
        setLoading(true);
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
            console.error("Error deleting the book: ",err);
        }
        finally{
            setLoading(false);
        }
    };

    return {data,error,loading,fetchData,postData,updateData,deleteData};
}

export default useFetch;