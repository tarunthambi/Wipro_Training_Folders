//Capturing arguments as an array
/*
A function can have a parameter prefixed with ... to capture any remaining
argumanets as an array
*/

function sum(...numbers){
    let total=0;
    for(const num of numbers){
        total+=num;
    }
    return total;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6))
console.log(sum())

function printInfo(name,...skills)
{
    console.log(`Name: ${name}`);
    console.log("Skills");
    for(const skill of skills)
    {
        console.log(`- ${skill}`)
    }
}

printInfo("Alice","JavaScript","Python","Java");
printInfo("Mark",".NET","JavaScript","Python","Java");
printInfo("Jane");

