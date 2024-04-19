const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server, {
	cors: {
		origin: "*",
	}
})

app.use(cors())

app.get('/', (req, res) => {
	res.send('Hello World!')
});

io.on('connection', (socket) => {
	console.log('a user connected')
	io.emit('message', 'A user connected')
})

server.listen(3000, () => {
	console.log("Listening on port 3000")
})
