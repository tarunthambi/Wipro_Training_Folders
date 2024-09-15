//Fecthing data from WeatherAPI
import React, { useEffect, useState } from "react";
const MyComponent =()=>{

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const fetchdata=async () =>{
            try{
                const response=await fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&APPID=6f07e404414b2e75a888e049d63fcc5d");
                if(!response.ok){
                    throw new Error("Network response was not ok");
                }
                const result=await response.json();
                console.log(result);
                setData(result);
            }
            catch(error){
                setError(error);
                console.error("Error Fetching Data: ",error);
            }
        };
        fetchdata();
    },[]);

    if(error){
        return <div>Error: {error.message}</div>
    }

    return(
        <div>
            <h2>Fetching the external data from weather API</h2>
            {data?JSON.stringify(data): 'Loading....'}
        </div>
    )
}

export default MyComponent;