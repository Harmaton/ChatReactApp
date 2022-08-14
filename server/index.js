const express = require('express');
const app = express();
const http = require("http");
const cors = require("cors");
const {Server} = require("socket.io");
const { Socket } = require('dgram');


app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "",
        methods: ["GET", "POST"],
    }
});

io.on("connection", (socket) => {
console.log(socket);


Socket.on("disconnect", () => {
console.log("user disconnected", socket.id)
});

});

server.listen(3001, () => {
console.log("Server on the run....");
});

