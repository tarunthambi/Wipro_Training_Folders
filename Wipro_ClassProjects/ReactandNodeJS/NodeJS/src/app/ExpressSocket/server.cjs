// install the required dependencies
// npm install express socket.io

const express=require('express');
const http=require('http');
const {Server}=require('socket.io');

const app=express();
const server=http.createServer(app);
const io=new Server(server);

app.get('/',(req,res)=>{
    //res.send("Server is UP and RUNNING !!!");
    res.sendFile(__dirname+'/index.html');
});

io.on('connection',(socket)=>{
    console.log('User Connected');

    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg);
        console.log(msg);
    });

    socket.on('disconnect',()=>{
        console.log("User Diconnected");
    })
})

server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});

