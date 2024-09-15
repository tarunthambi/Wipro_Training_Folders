import fetch from "node-fetch";

//Function to fetch weather data
async function getWeatherData(city) {
    const apikey="";
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apikey}`;

    try
    {
        const response=await fetch(URL);        
        const weatherData=await response.json();
        return weatherData;
    }
    catch(error){
        console.log("Error fetching weather data: ",error.message);
        throw error;
    }

}

//Call the function with city
getWeatherData("Mumbai")
.then((data)=>{
    console.log(data); //Display the weather data for city
})
.catch((error)=>{
    console.log(error);
})