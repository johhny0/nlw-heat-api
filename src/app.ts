import "dotenv/config";

import http from "http";
import express from "express";
import cors from "cors";
import { routes } from "./routes";
import { Server } from "socket.io";

const app = express();

app.use(express.json())
app.use(routes)
app.use(cors())

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
});

io.on("connection", socket => console.info(`Usuário conectado no socket: ${socket.id}`));

/// http://localhost:4000/signin/callback
// http://localhost:4000/signin/callback?code=682697fb6281cd26d48b

export { serverHttp, io }