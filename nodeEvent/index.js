const EventEmitter = require("events");

const event = new EventEmitter();

event.on("checkStatus", (code, status) => {
  console.log(`status code is ${code} and the page is ${status}`);
});

event.on("fullName", () => {
  console.log("my name is ovais raza");
});

event.emit("checkStatus", 200, "ok");
event.emit("fullName");
