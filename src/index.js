const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http');
const server = http.createServer(app);

const port = process.env.PORT || 3000

const io = require('socket.io')(server, {
	cors: {
		origin: "*",
	}
})

app.use(cors({
	origin: '*'
}))

app.get('/', (req, res) => {
	res.send('Hello World!')
});

io.on('connection', (socket) => {
	console.log(socket.id + " Connected")
	io.emit('message', 'A user connected')
})

server.listen(port, () => {
	console.log("Listening on port: " + port)
})
