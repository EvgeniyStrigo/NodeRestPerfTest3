'use strict'
// last update 5 month ago
// has types definitions @types/restify
// not working out-of-the-box
// not support Node v18

const restify = require('restify');

const server = restify.createServer();
server.get('/', respond);

function respond(req, res, next) {
    res.set('Connection', 'close');
    res.send('Hello World!');
    next();
}

server.listen(8080, function () {
    console.log('restify %s listening at %s', server.name, server.url);
});
