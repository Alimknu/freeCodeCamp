import os from "os";
import http from "http";
import fs from "fs";
import { WebSocketServer } from "ws";

function getMetrics() {
  return {
    loadAvg: os.loadavg(),
    freeMemMB: (os.freemem() / 1024 / 1024).toFixed(0),
    totalMemMB: (os.totalmem() / 1024 / 1024).toFixed(0),
    memUsagePct: (
      ((os.totalmem() - os.freemem()) / os.totalmem()) *
      100
    ).toFixed(1),
  };
}

const server = http.createServer();
const wss = new WebSocketServer({ server });

wss.on("connection", (socket) => {
    console.log("Client connected");
    const interval = setInterval(() => {
        socket.send(JSON.stringify(getMetrics()));
    }, 1000);
    socket.on("message", (data) => {
        console.log("Received:", data.toString());
    });
    socket.on("close", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });
    socket.on("error", (err) => {
        console.error("Socket error:", err);
    });

});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
