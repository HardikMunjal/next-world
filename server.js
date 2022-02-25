const express = require('express');
const app = express();
var router = express.Router();

var bodyParser = require('body-parser');

//add body parser thing before router to parse data in req body.
app.use(bodyParser.json({
	limit: '10mb'
}));


app.use(router);
require('./routes')(router);
app.listen(3000);

console.log('Node.js web server at port 3000 is running..')
