// Importacion de express
var express = require('express');
// Ejecutar la libreria express
var app = express();
// Creacion del servidor
var server = require('http').Server(app);

// Servidor WebSockets
var io = require('socket.io')(server);

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.status(200).send("Hola mundo!")
})

/*Array de mensajes que se enviaran cuando se conecten clientes al servidor*/
var messages = [{
    author: "Carlos",
    text: "Hola! que tal?",
}];

/*Funcion que permite que el servidor websockets este atento a que se realice una conexion de un cliente*/
io.on('connection', (socket) => {
    console.log("Un cliente se ha conectado");
    socket.emit('Messages', messages);


    socket.on('new-message', (data) => {
        messages.push(data);

        // con io.socket.emit se notifica a todos los usuarios conectados
        io.sockets.emit('Messages', messages);
    })
})



server.listen(8080, function () {
   console.log("Servidor corriendo en http://localhost:8080")
});

// Permite recibir mensajes por sockets
