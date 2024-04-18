const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io")
const io = new Server(server);

app.get('/', (req:any, res:any) => {
	res.send('Hello World!')
});

io.on('connection', (socket:any) => {
	console.log('a user connected')
})

server.listen(3000, () => {
	console.log("Listening on port 3000")
})