const path = require("path")
const http = require("http")
const socketio = require("socket.io")
const express = require("express")

const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const publicDirectoryPath = path.join(__dirname, "../public")
app.use(express.static(publicDirectoryPath))
let count = 0
io.on("connection", (socket) => {
  socket.emit("countUpdated", count)
  socket.on("increment", () => {
    count++
    socket.emit("countUpdated", count)
  })
})

server.listen(port, () => {
  console.log(`The server is running on ${port}`)
})
