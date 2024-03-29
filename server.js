var express = require('express')
, path = require('path');

var app = express();

require('./routes')(app);

//Points express to a folder where you keep static files
//e.g css or client side jw files
app.use(express.static(path.normalize(__dirname) + '/public'));

//tell expres to use its built in error handler
app.use(express.errorHandler());

app.configure(function() {
	app.use(express.logger('dev'));
	app.use(express.bodyParser());

})

//next 3 lines tell express that we are going to be rendering html files
//held in public directory which should be in the same directory as this file
app.set('views', path.normalize(__dirname) + '/public');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


var port = Number(process.env.PORT || 8000);
app.listen(port);
console.log("app listening on port " + port);