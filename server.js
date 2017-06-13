const port = process.env.PORT || 8080;

// const bodyParser = require('body-parser');
const express = require('express');
var app = express();

app.use(express.static(`${process.cwd()}/app`))
    .listen(port, function () {
        console.log('Port: ' + port);
    });