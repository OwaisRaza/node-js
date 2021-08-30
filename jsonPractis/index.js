const fs = require("fs");

fs.readFile("./jsonData.json", "utf-8", (err, data) => {
  const orgData = JSON.parse(data);
  console.log(orgData);
});
