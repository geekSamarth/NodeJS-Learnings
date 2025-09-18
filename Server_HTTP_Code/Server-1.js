const http = require("node:http");

const server = http.createServer(function (req, res) {
  console.log(`Incoming request at [${Date.now()}]`);

  switch (req.url) {
    case "/":
      res.writeHead(200);
      return res.end("Homepage");
    case "/contact-us":
      res.writeHead(200);
      return res.end("Contact us page!!");
    case "/about":
      res.writeHead(200);
      return res.end(
        "About us page is being loaded on the client machine or browser!"
      );
    default:
      res.writeHead(404);
      return res.end("You're lost in the endgame!");
  }
});

server.listen(8000, function () {
  console.log("Server is running on PORT:8000");
});
