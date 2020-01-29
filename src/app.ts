import express, {Request, Response, NextFunction, Router} from 'express';
import bodyParser from 'body-parser';
import 'reflect-metadata';

import teamingRouter from './router/teaming';
import riotRouter from './router/riot';

import User from './models/User';

type SocketMap = Map<string, User | null>;
const socketMap: SocketMap  = new Map<string, User | null>();


const app = express();

const port =  process.env.PORT || 80;
app.set("port", port);

const http = require('http').Server(app);
const io = require('socket.io')(http); 


app.use(bodyParser.json());

app.use("/teaming", teamingRouter);
app.use("/riot", riotRouter);


declare namespace APP{
    const _APP_KEY = 'RGAPI-f4a5b0f6-1133-4687-8999-8b349557e632';

} 

io.on("connection", function(socket: any):void{
    console.log("a user connected : ", socket.id);

    const socketId:string = socket.id;
    socketMap.set(socketId, null);

    console.log("current users ", socketMap.size);

    socket.on("message", function(message: any){
        console.log(socket.id);
        console.log("message", message);
    });

    socket.on("message2", function(message: any){
        console.log(socket.id);
        console.log("message2", message);
    });

    socket.on("list", function(message: any){
        console.log("list request",message);
        console.log(socketMap);
        
        const obj = Object.create(null);
        for (let [k,v] of socketMap) {
            obj[k] = v;
        }
        console.log(obj);
        socket.emit("list", obj);
    });

    socket.on("disconnect", function(ele: any){
        console.log("a user has disconnected");
        socketMap.delete(socket.id);
        console.log("current users ", socketMap.size);
    });
});

const server = http.listen(port, function(){
    console.log("listening on "+port);
})
