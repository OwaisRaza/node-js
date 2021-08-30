const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hi ovais raza, how are you ?");
  } else if (req.url === "/about") {
    res.end("welcome About us page");
  } else {
    res.writeHead("404", { content_type: "text/html" });
    res.end("<h1>404 Not found!</h1>");
  }
});

server.listen("8000", "localhost", () => {
  console.log("listing....");
});
