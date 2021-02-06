const http = require("http");

const name = process.env.NAME

http.createServer(function(request, response){
    response.setHeader("UserId", 12);
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    response.write(`<h2>hello ${name}!!!</h2>`);
    response.end();
}).listen(8080);
