const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync("../jsonPractice/userApi/userapi.json", "utf-8");
  // const objData = JSON.parse(data);

  if (req.url === "/") {
    res.end("Hi ovais raza, how are you ?");
  } else if (req.url === "/about") {
    res.end("welcome About us page");
  } else if (req.url === "/userApi") {
    res.writeHead(200, { content_type: "application/json" });
    res.end(data);
  } else {
    res.writeHead("404", { content_type: "text/html" });
    res.end("<h1>404 Not found!</h1>");
  }
});

server.listen("8000", "localhost", () => {
  console.log("listing....");
});
