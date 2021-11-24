const cors=require('cors');
const io = require("socket.io")(5000,
    {  cors: {    origin: "http://localhost:3000",    methods: ["GET", "POST"]  }} );


io.on('connection', socket => {
    const id = socket.handshake.query.id
    socket.join(id)
    
    socket.on('send-message', ({ recipients, text }) => {
        console.log(recipients)
        recipients.forEach(recipient => {
        console.log(recipient)
        const newRecipients = recipients.filter(r => r !== recipient)
        newRecipients.push(id)
        console.log(newRecipients)

        socket.broadcast.to(recipient).emit('receive-message', {
            recipients: newRecipients, sender: id, text
        })
        })
    })
    })