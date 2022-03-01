const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/nextworld');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully With Mongo Db Database");
});

var router = express.Router();

var bodyParser = require('body-parser');
const req = require('express/lib/request');


//add body parser thing before router to parse data in req body.
app.use(bodyParser.json({
	limit: '10mb'
}));


app.use(router);
require('./routes')(router);
app.listen(3000);

console.log('Node.js web server at port 3000 is running..')
