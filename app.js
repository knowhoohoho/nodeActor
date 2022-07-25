const express = require('express')
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server);

app.set('view engine', 'ejs')

app.get('/', (req,res,next) => {
    res.render('index')
})



io.on('connection' , (socket) => {
    socket.emit('usercount', io.engine.clientsCount)

    socket.on('message', (msg) => {
        console.log('meesage', msg)

        io.emit('message', msg)
    })
})





server.listen(7000, () =>{
    console.log('server on')
})