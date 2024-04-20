const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors({
	origin: "*",
}))

const http = require('http');
const server = http.createServer(app);

const port = process.env.PORT || 3000

const io = require('socket.io')(server, {
	cors: {
		origin: ["http://localhost:3000", "http://localhost:5173", "https://dear-code.vercel.app", "https://dear-code.vercel.app/code"],
	}
})

app.get('/', (req, res) => {
	res.send('Hello World!')
});

io.on('connection', (socket) => {
	console.log(socket.id + " Connected")
	io.emit('message', `${socket.id} Connected`)
})

server.listen(port, () => {
	console.log("Listening on port: " + port)
})
