var app = require('express')();
var http = require('http').createServer(app);
const PORT = 8080;
var io = require('socket.io')(http, {
    cors: {
        origin: "http://192.168.0.219:3000",
        methods: ["GET", "POST"]
      }
});
let users = [];
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

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
