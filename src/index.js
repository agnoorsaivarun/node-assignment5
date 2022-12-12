var http = require("http");

const httpServer = http.createServer(handleServer);
function handleServer(req, res) {
  // console.log(req);
  // console.log(req.url);
    if (req.url == "/") {
        res.writeHead(200, {"Content-type": "text/plain",});
        res.end("from home page");
      } else if (req.url == "/welcome") {
        res.writeHead(200, {"Content-type": "text/plain",});
        res.end("Welcome to Dominos!");
      } else if (req.url == "/contact") {
        res.writeHead(200, "utf-8", { "Content-type": "application/json" });
        res.end(
          JSON.stringify({
            phone: "18602100000",
            email: "guestcaredominos@jublfood.com",
          })
        );
      } else {
        res.writeHead(404, {"Content-type": "text/html" });
        res.end("<h1 style={text-align:center}>ooops!! 404 Page is not found</h1>");
      }  
}
httpServer.listen(8081, () => {
    console.log("server is up at 8081 port");
  });
  
// module.exports = httpServer;