const fs = require("fs"); // built-in modules

// console.log(fs);

console.log("Starting of the program.");

// Blocking code

// const content = fs.readFileSync("notes.txt", "utf-8");
// console.log(content);

// Non-Blocking Code

fs.readFile("./notes.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("Error while reading the content of the file", err);
  } else {
    console.log("Data is: ", data);
  }
});

console.log("End of the program.");
