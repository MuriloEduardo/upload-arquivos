var port = process.env.PORT || 8080;
var express = require('express');
var multer  = require('multer');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.listen(port, function(){
	console.log('Rodando na porta ' + port);
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        var fileName = file.originalname.split('.')[0];
        var fileType = file.originalname.split('.')[1];
        
        cb(null, fileName + Date.now() + '.' + fileType);
    }
});

var upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), function (req, res, next) {
	console.log(req.body)
	console.log(req.file)
	res.json({success: true});
})

app.get('/imagens', function(req, res){
	res.render('imagens.ejs');
});

app.get('/arquivos', function(req, res){
	res.render('arquivos.ejs');
});