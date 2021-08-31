const EventEmitter = require("events");

const event = new EventEmitter();

event.on("checkStatus", (code, status) => {
  console.log(`status code is ${code} and the page is ${status}`);
});

event.emit("checkStatus", 200, "ok");
