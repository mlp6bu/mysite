exports.index = function(req, res) {
	res.send("welcome to CS1501");
}

exports.watch=function(req, res) {
	var video_id = req.query.v;
	res.render('watch', {id: video_id}, function(err, html){
		res.send(html);

	});
}