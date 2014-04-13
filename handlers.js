exports.index = function(req, res) {
	res.send("welcome to CS1501");
}

exports.watchf=function(req, res) {
	var video_id = req.query.v;
	res.render('watch', {id: video_id}, function(err, html){
		res.send(html);

	})
}

exports.bootstrap101 = function(req, res) {
	res.render('bootstrap', function(err, html){
		res.send(html);
	})
}

exports.watch = watchf;