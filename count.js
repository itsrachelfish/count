var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(1024);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  io.sockets.emit('connected', { 'connection': 'established' });

  socket.on('name', function (data) {
    console.log(data);
    io.sockets.emit('name', data);
  });
});