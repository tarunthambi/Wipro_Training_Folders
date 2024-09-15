function funcwelcome(){
    console.log("Welcome..........In Function!!");
    console.warn("This is warning message");
    console.error("This is error message");
    console.info("This is info message");
}
funcwelcome();

//Anonymous Function
let greetuser=function(){
    console.log("Greetings.....from anonymous function");
}
greetuser();

let greetuserbyname=function(name){
    console.log("Greetings....."+name+" from anonymous function");
}
greetuserbyname("user");

setTimeout(greetuser,2000);

setTimeout(function(){
    console.log("From anonymous function using set timeout")
}, 3000);

//Self Executing Functions
(function(){
    console.log("Self Executing Function");
})();

(function(name){
    console.log("Self Executing Function..."+name);
})("user");

//Arrow Functions
let f1=()=>{
    console.log("Arrow Function....1");
}
f1();

let f2=(number)=>{
    console.log("Arrow Function....2 "+number);
}
f2(100);

(()=>{
    console.log("Arrow Function....3");
})();

((name,email)=>{
    console.log("Name is "+name);
    console.log("Email is "+email);
})("user","user@test.com");

setTimeout(()=>{
    console.log("Set timeout called with arrow function")
},2000);

//computation
let compute=()=>{
    let sum=0;
    for(let i=0;i<=1000;i++){
        sum+=i;
    }
    console.log("Sum = "+sum);
    
}
compute();

//Function with rest parameters
let add=(Empid,Count,...Scores)=>{
    let sum=0;
    Scores.forEach(fadd); //Callback
    function fadd(s){
        sum+=s;
    }
    console.log("Total for "+Empid+" = "+sum);    
}
add(101,2,75,80);
add(102,4,70,60,92,65);