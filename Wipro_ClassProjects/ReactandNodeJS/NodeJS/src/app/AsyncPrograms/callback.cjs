const prompt=require('prompt-sync')({sigint:true})

//A callback function is a function passed into another function as an argument

//Synchronous Callback Function

function greeting(name){
    console.log(`Hello, ${name}`);
}

function processUserInput(callback){
    const name=prompt("Please enter name: ");
    callback(name);
}

processUserInput(greeting);

//Asynchronous Callback Function
function getDetails(){
    console.log("This is asynchronous callback function");
}

let compute=()=>{
    console.log("In Compute");
    let sum=0;
    for(let i=1;i<=50;i++){
        sum+=i;        
    }
    console.log("Sum = "+sum);
}

let add=(a,b,...numbers)=>{
    let sum=0;
    numbers.forEach(funcadd);

    function funcadd(item){
        sum+=item;
    }
    console.log("Sum = "+sum);
}

setTimeout(getDetails,4000);
compute();
add(1,2,3,4,5);