/*En main.js (de la parte cliente) conectamos el cliente con el servidor de websockets que tenemos
en http://localhost:8080 y escuchamos el evento messages.*/
var socket = io.connect('http://localhost:8080', { 'forceNew':true })

socket.on('messages', function (data) {
    console.log(data)
})