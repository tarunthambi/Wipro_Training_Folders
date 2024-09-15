let mypromise=new Promise(function(success,failure){
    // Producing code (may take some time)
    console.log("Random function displaying number between 0 and 1");
    let x=Math.random();

    if(x>0.5){
        success("Number greater than 0.5: "+x);
    }else
    {
        failure("Error: Number less than 0.5");
    }
});

//Consuming Code
mypromise.then(function(value){
    displayResult(value);
},
function(error){
    displayResult(error);
}
);

function displayResult(returnvalue){
    console.log(returnvalue);
}