const prompt=require('prompt-sync')({sigint:true})

const name=prompt("Enter name: ");
const email=prompt("Enter email: ");

console.log(`Hey there ${name}!`);
console.log(`Your email is ${email}!`);

//Random number from 1-10
const numbertoguess=Math.floor(Math.random()*10)+1;
console.log(numbertoguess);
console.log("\n");

//This variable is used to determine if the app should continue prompting
//the user for imput
let foundcorrectnumber=false;

while(!foundcorrectnumber){
    //Get user input
    let guess=prompt("Guess a number from 1 to 10 ");

    //Convert the string input to a number
    guess=Number(guess);

    //Compare the guess and let the user know
    if(guess === numbertoguess){
        console.log("Congrats, you got it!");
        foundcorrectnumber=true;
    }
    else{
        console.log("Sorry, guess again!");
    }
}