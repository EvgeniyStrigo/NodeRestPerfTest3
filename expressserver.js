'use strict'
// last update 3 month ago
// 57,7k stars
// has types definitions @types/express

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.set('Connection', 'close');
    res.send('Hello World')
})

app.listen(8000, function () {
    console.log('Express server listening on port 8000!');
});
