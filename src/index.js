const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const PORT = process.env.PORT || 3000


const publicDicrectoryPath = path.join(__dirname, '../public')

// Setup static directory
app.use(express.static(publicDicrectoryPath))

io.on('connection', () => {
    console.log('New WebSocket connection')
})

server.listen(PORT, () => {
    console.log('Server is up and running on port: '+ PORT)
})