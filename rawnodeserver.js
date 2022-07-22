'use strict'

const http = require("http");

http.createServer(function(request, response) {
	response.setHeader('Connection', 'close');
	response.end('Hello World!');
}).listen(8000, () => {
    console.log("Raw node server is running at port 8000...");
});
