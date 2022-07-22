'use strict'
// last update 9 month ago
// 32,9k stars
// has types definitions @types/koa

const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    ctx.set('Connection', 'close');
    ctx.body = 'Hello World!';
});

app.listen(8000, () => {
    console.log(`Koa Server listening on port: ${8000}`);
})
