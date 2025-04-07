import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
// import { setupSocket } from './socket';

const app = express();
const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: '*',
//   },
// });

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Ludo backend running!');
});

// setupSocket(io);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
