const fs = require("fs");

fs.mkdir("importMd", () => {
  console.log("created...");
});

fs.writeFile("importMd/index", "welcome", (err, data) => {
  console.log(data);
});

// fs.rename("importMd/index", "importMd/index.js", (err) => {
//   console.log(err);
// });

// fs.appendFile("test/bio.txt", " shiraz", (err, data) => {
//   console.log("data");
// });

// fs.readFile("test/bio.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.rmdir("test", () => {
//   console.log("deleted...");
// });

// fs.unlink("test/bio.txt", () => {
//   console.log("file deleted...");
// });
