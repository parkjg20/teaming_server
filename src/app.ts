import express, {Request, Response, NextFunction, Router} from 'express';
import bodyParser from 'body-parser';
import 'reflect-metadata';

import teamingRouter from './router/teaming';
import riotRouter from './router/riot';

const app = express();

const port =  process.env.PORT || 80;
app.set("port", port);

const http = require('http').Server(app);

const io = require("socket.io")(http);

app.use(bodyParser.json());

app.use("/teaming", teamingRouter);
app.use("/riot", riotRouter);

io.on("connection", function(socket: any){
    console.log("a user connected");
    console.log(socket.adapter.rooms);

    io

    socket.on("message", function(message: any){
        console.log(message);
        socket.emit("message", );
    });

    socket.on("disconnect", function(ele: any){
        console.log(ele);
    })
})


const server = http.listen(port, function(){
    console.log("listening on "+port);
    console.log("current connected sockets : ", io.socket);
})