const PI=3.14;
let number=1;

function calc(){
    console.log(number);
    console.log(PI*100);
    number=10; //refer to the global scope
    console.log(number);    

    //let number=0;
    //number refer to the local scope
    for(let number=0;number<10;number++)
    {
        console.log(number);
    }

}

calc();