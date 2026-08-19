import http from 'http';
import fs from 'fs';
import { WebSocketServer } from 'ws';

const PORT = 3001;

const server = http.createServer((request, response) => {
  const filePath = request.url === "/" ? "./public/index.html" : `.${request.url}`;

  fs.readFile(filePath, (err, content) => {
    if (err) {
        response.writeHead(404, { "Content-Type": "text/plain"});
        response.end("File Not Found");
        return;
    }
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(content);
  });
});

const wss = new WebSocketServer({ server });

const broadcast = (messageObj) => {
    const jsonString = JSON.stringify(messageObj);
    wss.clients.forEach((client) => {
        if (client.readyState === 1)
        {
            client.send(jsonString);
        }
    });
};

wss.on("connection", (socket, req) => {
    const username = new URL(req.url, "http://localhost").searchParams.get("username",);

    broadcast({ type: "system", text: `${username} joined`});

    socket.on("message", (data) => {
        try {
            const parsed = JSON.parse(data);
            broadcast({
                type: 'chat',
                username: parsed.username,
                text: parsed.text
            });
        } catch (err) {
            console.error("Failed to parse message:", err);
        }
    });

    socket.on("close", () => {
        broadcast({ type: 'system', text: `${username} left` });
    });

});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
