const express = require('express');
const path = require('path');
const app = express();
var http = require('http').createServer(app);
const PORT = process.env.PORT || 80;
let users = [];
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => {
    console.log(`Connected: ${socket.id}`);
    
    socket.on('disconnect', () => {
     users.forEach (user => {
        if (user.id == socket.id) {
        let index = users.indexOf(user);
        users.splice(index, 1);
        io.emit('userUpdate', users);
        }
     });
    console.log(`Disconnected: ${socket.id}`);
    socket.removeAllListeners();
    });
    
    socket.on('msg', text => {
       console.log(`msg: ${text}`);
       socket.broadcast.emit('speak', text); // may want to make this io.emit in production so that clients can hear themselves
    });

    socket.on('newUser', user => {
        console.log(`user added: ${user.name}`);
        users.push(user);
        io.emit('userUpdate', users);
    });

 });
