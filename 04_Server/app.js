const http = require("http");

const requestHandler = require("./1users");

const server = http.createServer(requestHandler);

const PORT = 3002;

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
