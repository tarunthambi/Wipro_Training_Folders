//copying arrays
/*
Assigning an array to another variable creates a reference, not a true copy.
Changes in one affect the other.
The spread operator creates a new array with independent elements
*/

let spread_array=()=>{
    const numbers=[1,2,3];
    const copynumbers1=[...numbers] //independent copy created
    const copynumbers2=[-1,0,...numbers,"four"];

    //Display copynumbers1
    console.log(copynumbers1);
    copynumbers1.push(4);

    console.log(numbers);
    console.log(copynumbers1);
    console.log(copynumbers2);


    //Display copynumber2
    copynumbers2.forEach(elem=>{
        console.log(elem);
        if(Number(elem))
            console.log("Number");
        else
            console.log("Not a number");
    })
}

//spread_array();

//Concatenating Arrays - Combines arrays into a new one
function spread_combinearray(){
    let colorset1=["red","blue","yellow","white"];
    let colorset2=["white","grey"];
    let allcolors=[...colorset1,...colorset2];
    console.log(allcolors);
}
//spread_combinearray();

//Selecting elements in destructuring
/*
Desttructuring with spread allows selecting specific elements and grouping the rest.
*/

//first=1, second=2,rest=[3,4,5]
function spread_destructure(){
    const numbers=[1,2,3,4,5];
    const [first,second,...rest]=numbers;
    console.log(first);
    console.log(second);
    console.log(rest);
    numbers.forEach(e=>{
        console.log(e);
    })
}

//spread_destructure();

//Spreading in function calls
/*
The spread operator can be used with function calls to pass arguments as
individual elements from an iterable
*/

function sum(a,b,c)
{
    return a+b+c;
}
const numbers=[1,2,3];
const result=sum(...numbers);
//console.log(`Sum = ${result}`);

//Merging Objects
/*
Can be used to create new objects by merging properties from existing ones
*/

const employee={name:'Grace',age:30};
const job={title:'Software Engineer'};
const employeedetails={...employee,...job};
console.log(employeedetails);