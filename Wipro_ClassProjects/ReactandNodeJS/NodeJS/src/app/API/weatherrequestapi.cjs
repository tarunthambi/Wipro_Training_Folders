const request=require('request')

//URL
let url="https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&APPID=68548567954e5b40bc839eab736d9a45";

request(url,(error,response,body)=>{
    //Printing the error if occured
    if(error)
        console.log(error);

    //Printing the status code
    console.log(response.statusCode);
    console.log(response.statusMessage);

    //Printing Content
    console.log(body);
})