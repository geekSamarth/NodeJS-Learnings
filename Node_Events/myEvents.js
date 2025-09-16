const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (username) => {
  console.log(`Hello ${username} and welcome to events in node.js`);
});

eventEmitter.once("pushnotify", () => {
  console.log("This event will run only once");
});

const myListener = () => {
  console.log("I am a test listener");
};
eventEmitter.on("test", myListener);
eventEmitter.emit("test");

// Emit the event

eventEmitter.emit("greet", "Samarth");
eventEmitter.emit("greet", "chai");
eventEmitter.emit("pushnotify");
// eventEmitter.emit("pushnotify");
