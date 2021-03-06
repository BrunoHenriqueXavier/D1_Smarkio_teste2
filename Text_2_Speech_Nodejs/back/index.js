//main
const express=  require('express');
const routes = require('./routes');
const cors = require('cors');
const makeConnection = require('./DB/connection');
const open = require('open');
const path = require('path');


makeConnection();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/', express.static(__dirname + '/../front'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../front/index.html'));
    
});

open('http://localhost:8080');
app.listen(8080);

module.exports = app;