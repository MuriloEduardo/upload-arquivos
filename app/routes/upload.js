module.exports = function(router) {
	router.post('/upload', upload.array('photos', 12), function(req, res) {
		console.log(req.body)
		console.log(req.files)
		res.json({success: true});
	});
	router.get('/', upload.single('avatar'), function(req, res){
		res.render('index.ejs');
	});
}