import { http, ws, SocketConnection } from "@ampt/sdk";
import express, { Router } from "express";

const app = express();

const api = Router();

api.get("/", (req, res) => {
  return res.status(200).send({ success: true });
});

app.use("/api", api);

ws.on("connected", (socket: SocketConnection) => {
  console.log("Socket connected", socket.connectionId);
});

http.node.use(app);
