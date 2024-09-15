//try-catch for synchronous code

try
{
    let jsondata={"value":1};
    let result=JSON.parse(jsondata); //used to parse json string into javascript object
    console.log(result);
}
catch(error){
    console.log('Caught an error: ',error.message);
}

//error passed in callback in asynchronous code with callbacks
const fs=require('fs');
fs.readFile('data1.txt','utf-8',(err,data)=>{
    if(err){
        console.log('Error reading the file: ',err.message);
        return;
    }
    console.log(data);
})

//use .catch for promises
const fspromise=require('fs').promises;
fspromise.readFile('nonexistingfile.txt','utf-8')
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log('Error reading the file: ',err.message);
    })


//use try-catch with async await
async function readFile(){
    try
    {
        let data=await fspromise.readFile('nonexistingfile.txt','utf-8');
        console.log(data);
    }
    catch(err){
        console.log('Error reading the file: ',err.message);
    }
}
readFile();