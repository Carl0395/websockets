/*En main.js (de la parte cliente) conectamos el cliente con el servidor de websockets que tenemos
en http://localhost:8080 y escuchamos el evento messages.*/
var socket = io.connect('http://localhost:8080', { 'forceNew':true })

addMessage = (e) => {
  //alert("haber");
  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
  };

  socket.emit('new-message', message);
  return false;
}


render = (data) => {
    var html = data.map((elem, index) => {
        return(`<div>
                  <strong>${elem.author}</strong>:
                  <em>${elem.text}</em>
                </div>`
        );
    }).join(" ")

    document.getElementById('messages').innerHTML = html;
}

// Este metodo es llamado cuando se recibe un mensaje por sockets
socket.on('Messages', (data) => {
  console.log(data)
  render(data);
})
