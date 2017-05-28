var express = require('express');
var app = express();
var server = require('http').Server(app);

// Servidor WebSockets
var io = require('socket.io')(server);

// middleware static de express para usar las variables en otros ficheros
app.use(express.static('public'));

/*Array de mensajes que se enviaran cuando se conecten clientes al servidor*/
var messages = [{
    author: "Carlos",
    text: "Hola! que tal?"
},{
    author: "Pepe",
    text: "Muy bien y tu?"
},{
    author: "Paco",
    text: "Genia!!"
}];

/*Funcion que permite que el servidor websockets este atento a que se realice una conexion de un cliente*/
io.on('connection', function (socket) {
    console.log("Un cliente se ha conectado");
    socket.emit('Messages', {
        id: 1,
        text: "Hola esto es una prueba desde el servidor",
        author: "Carlos"
    });
});

app.get('/', function (req, res) {
    res.status(200).send("Hola mundo");
})


server.listen(8080, function () {
   console.log("Servidor corriendo en http://localhost:8080")
});
