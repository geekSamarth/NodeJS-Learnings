const http = require("node:http");
const servere = http.createServer(function (req, res) {
  console.log("I got an incoming request for dat");
  //   creating a server response
  res.writeHead(200);
  res.end("Thanks for visiting the server.");
});

servere.listen(8000, function () {
  console.log(
    "HTTP server is running on PORT:8000 and serving the user request."
  );
});
