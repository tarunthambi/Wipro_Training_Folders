//Event Emitter
const EventEmitter=require('events');
const emitter=new EventEmitter();

//Bind an event with a listener
emitter.on("mesglogged",(arg)=>{
    console.log("Event Listener Called",arg);
});

//Emit the event
emitter.emit("mesglogged",{id:1,url:'http://exampledomain.com'});
