module.exports = function(app) {
	var handlers = require('./handlers');
	app.get('/', handlers.index);
	app.get('/watch', handlers.watchf);
	app.get('/bootstrap', handlers.bootstrap101);
}