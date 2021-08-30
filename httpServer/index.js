const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hi ovais raza, how are you ?");
});

server.listen("8000", "localhost", () => {
  console.log("listing....");
});
