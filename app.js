const http = require('http');
const server = http.createServer(function (request, response) {
  console.log(request.url);
  if (request.url === "/") {
    let main = `<!DOCTYPE html>
    <html lang=\"ko\">
    <head>
      <meta charset=\"UTF-8\">
      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
      <title>Document</title>
    </head>
    <body>
      <h1>main</h1>
      <a href="http://localhost:1234/sub">sub</a>
    </body>
    </html>`
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(main);
  }
  if (request.url == "/sub") {
    let sub = `<!DOCTYPE html>
    <html lang=\"ko\">
    <head>
      <meta charset=\"UTF-8\">
      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
      <title>Document</title>
    </head>
    <body>
      <h1>sub</h1>
      <a href="http://localhost:1234/">main</a>
    </body>
    </html>`
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(sub);
  }
});

server.listen(1234);

