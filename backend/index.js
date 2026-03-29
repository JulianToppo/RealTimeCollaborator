const http= require('http');
const express= require('express');
const { Server } = require('socket.io');


const app=express();

const server=http.createServer(app)

const io= new Server(server,{
    cors:{
        origin:"*"
    }
})

io.on('connection',(socket)=>{
    console.log("User Connected");
    
    socket.on('send-message',(data)=>{
        console.log(data)
        socket.broadcast.emit('received-message',data)
    })
})


app.get("/",(req,res,next)=>{
    try {
        res.send("Hello World");
    } catch (error) {
        res.status(404)
    }
})

server.listen(5000,()=>{
    console.log("Server is running....")
})