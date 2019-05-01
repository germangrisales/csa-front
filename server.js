// cargamos express e iniciamos una aplicación
const express = require('express')()
// creamos un servidor HTTP desde de nuestra aplicación de Express
const server = require('http').Server(express)
// creamos una aplicación de socket.io desde nuestro servidor HTTP
const io = require('socket.io')(server)
const next = require('next')

const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

io.on('connection', socket => {
    // escuchamos el evento `message`
    socket.on('realTime', (data) => {
        // guardamos el mensaje en nuestra "DB"
        console.log(data)
        // enviamos el mensaje a todos los usuarios menos a quién los envió
        socket.broadcast.emit('realTime', data)
    })
})

app.prepare()
    .then(() => {

        express.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:' + port)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })