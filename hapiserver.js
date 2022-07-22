'use strict';
// last update 3 month ago
// 13,9k stars
// has types definitions @types/hapi__hapi

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const response = h.response('Hello World!');
            response.header('Connection','close');
            return response;
        }
    });

    await server.start();
    console.log('Hapi Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
