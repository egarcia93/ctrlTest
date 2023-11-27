
let express = require('express');
let app = express();

app.use('/', express.static('public'));


let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log("Server listening at port: " + port);
});


let io = require('socket.io')(server);


io.sockets.on('connection',function(socket){
    console.log("New Client:"+socket.id);
    socket.on('data',function(data){
        console.log("Received:'data'"+data);
        io.sockets.emit('data',data);
    });
    
});




