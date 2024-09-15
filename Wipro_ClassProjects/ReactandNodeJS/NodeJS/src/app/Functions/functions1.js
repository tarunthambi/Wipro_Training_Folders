"use strict";
const person={
    name:"Alice",
    greet:function(){
        console.log("Hi all, my name is "+`${this.name}`);
    },

    greet1:function(){
        try
        {
            //this refers to the global window object.
            //Since the global object doesnt have name property
            //it will give name as undefined

            //Arrow functions captures "this" value from thier surrounding
            //lexical context at thet time they are defined
            
            console.log("Hi all, my name is "+`${this.name}`);
        }
        catch(e)
        {
            console.log(e.message);
        }
    }
};


person.greet();

//use bind method to explicitly bind the this context to the person object before calling
//the arrow function

const obj=person.greet1.bind(person);
obj();
