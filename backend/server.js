const express = require('express');
const app = express();
const http = require('http');
const { init } = require('./socket');
const server = http.createServer(app);
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend')));



const io = init(server);

io.on('connection', socket => {
  console.log('Usuário conectado:', socket.id);

  socket.on('disconnect', () => {
    console.log('Usuário desconectado:', socket.id);
  });
});

const createTaskRoutes = require('./routes/tasks');
const taskRoutes = createTaskRoutes(io);

app.use(taskRoutes);

server.listen(3000, () => {
  console.log('Server rodando na porta 3000');
});
