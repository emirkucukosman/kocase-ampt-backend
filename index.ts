import { Server } from "socket.io";
import express, { Router } from "express";
import { http } from "@ampt/sdk";

const app = express();
const socket = new Server();

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

socket.on("connection", (socket) => {
  console.log("Connected", socket.id);
});

app.use(router);

http.node.use(app);
http.node.use(socket);
