/*
const http = require('http');
const colors = require('colors');

const handleServer = function (req, resp){
    resp.writeHead(200,{ 'Content-type':'text/html' });
    resp.write('<h1>Hola Mundo NodeJS<h1>');
    resp.end();
} 

const server = http.createServer(handleServer);

server.listen(3000, function (){
    console.log('Servidor levantado en el puerto 3000'.yellow);
});*/

const express = require('express');
const colors = require('colors');
const holaMundo = (req,resp)=>{
    resp.send('<h1>Hola Mundo con Express y NodeJS<h1>');
    resp.end;
} 
const server = express();

server.get('/', holaMundo);
server.listen(3000, ()=>{

    console.log('Server on port 3000'.green);

});