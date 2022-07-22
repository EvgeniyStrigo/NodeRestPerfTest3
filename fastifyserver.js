'use strict'
// last update 1 day ago!
// 24,3k stars
// has internal types definitions
// has deprecation warning on start!
/* (node:17376) [FSTDEP011] FastifyDeprecation: Variadic listen method is deprecated. Please use ".listen(optionsObject)" instead. The variadic signature will be removed in `fastify@5`.
(Use `node --trace-warnings ...` to show where the warning was created)
server listening on 8000
*/

const fastify = require('fastify');

const app = fastify();

app.get('/', (req, reply) => {
    reply
        .header('Connection', 'close')
        .send('Hello world!');
});

app.listen(process.env.PORT || 8000, err => {
    if (err) throw err;
    console.log(`fastify server listening on ${ app.server.address().port }`);
});