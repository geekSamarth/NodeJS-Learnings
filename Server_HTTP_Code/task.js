const http = require("node:http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  const method = req.method;
  const path = req.url;

  //   writing a log to keep the track of the requests
  const log = `\n[${Date.now()}]: ${method} ${path}`;
  fs.appendFileSync("log.txt", log, "utf-8");

  switch (method) {
    case "GET": {
      switch (path) {
        case "/": {
          return res.writeHead(200).end("Hello from the server!!");
        }
        case "/contact-us": {
          return res
            .writeHead(200)
            .end(
              "Sure, Email:samarthgoyal124@gmail.com,Phone: +91 99999 88888"
            );
        }
        case "/tweet": {
          return res
            .writeHead(200)
            .end("All tweets has been sent to the user !!");
        }
        default: {
          return res.writeHead(404).end("You're lost the game man!!");
        }
      }
      break;
    }
    case "POST": {
      switch (path) {
        case "/tweet": {
          return res
            .writeHead(201)
            .end("Your tweet was created and publsihed!!");
        }
        default: {
          return res.writeHead(404).end("You're lost the game man!!");
        }
      }
    }
  }
});

server.listen(8000, function () {
  console.log("HTTP Server is listening of PORT:8000");
});
