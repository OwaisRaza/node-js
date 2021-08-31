const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const readStream = fs.createReadStream("input.txt");

  // using pipe method best way
  //   readStream.pipe(res);

  // without using pipe
  readStream.on("data", (chunk) => {
    res.write(chunk);
  });

  readStream.on("end", () => {
    res.end();
  });

  readStream.on("error", (err) => {
    console.log(err);
    res.end("file not found!");
  });
});

server.listen("8000", "localhost", () => {
  console.log("listing....");
});
