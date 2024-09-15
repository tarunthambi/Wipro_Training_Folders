let globalvar="Admin"; //global scope

function Access()
{
    console.log(globalvar);
}
Access();

function outer(){
    const outervar="Outer Scope";

    function inner(){
        console.log(outervar); //Can access outervar due to lexical scope
    }

    inner();
}
outer();

const users={
    name:"User",
    display:function(){
        const innerfunction1=()=>{
            console.log(globalvar);
            const str="powerful";
            const stringdata=`Template strings are
            ${str} way to create
            strings`;
            console.log(stringdata);
            console.log(`Username is ${this.name}`);
            console.log("Username is "+this.name); //this refers to users object
        }
       
        innerfunction1();

        function innerfunction2(){
            try
            {
            console.log("Username is "+globalvar); 
            console.log("Username is "+this.name); //this refers to window object
            
            }
            catch(e)
            {
                console.log(e.message);
            }
        }
        innerfunction2();
        
        
        
    }
}
users.display();

