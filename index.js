const fs = require("fs");

fs.mkdir("test", () => {
  console.log("created...");
});

fs.writeFile("test/bio.txt", "welcome", (err, data) => {
  console.log(data);
});

fs.appendFile("test/bio.txt", " shiraz", (err, data) => {
  console.log("data");
});

// fs.readFile("test/bio.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.rmdir("test", () => {
//   console.log("deleted...");
// });

// fs.unlink("test/bio.txt", () => {
//   console.log("file deleted...");
// });
