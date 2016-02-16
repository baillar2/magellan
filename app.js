
// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var places = [
"seville", "canaryIslands", "capeVerde", "straitOfMagellan", "guam", "philippines"
]

// Routes \\
// app.get('/main.css', function(req, res) {
// 	res.sendFile('main.css', {root: './public'})
// });

app.post('/canaryIslands', function(req, res) {
	res.sendFile("canaryIslands.html", {root: "./public"})
});

app.post('/capeVerde', function(req, res){
	res.sendFile("capeVerde.html", {root: "./public"})
});

app.post('/straitOfMagellan', function(req, res){
	res.sendFile('straitOfMagellan.html', {root: "./public"})
});

app.post('/guam', function(req, res){
	res.sendFile('guam.html', {root: "./public"})
});

app.post('/philippines', function(req, res){
	res.sendFile('philippines.html', {root: "./public"})
});

app.get('/', function(req, res){
  res.sendFile("seville.html", {root: "./public"})
});

app.get('/:fileName', function(req, res){
	for(i=0; i<places.length; i++){
		if (req.params.fileName == places[i]){
			var place = true
			console.log("true!")
		}
		// else {
		// 	var place = false
		// 	console.log("bad")
		// }
	}

	if (place == true) {
		console.log("super dooper true")
		// because the file's name ends in html
		res.sendFile(req.params.fileName + ".html", {root: './public'})
	}
	else {
		res.send("Magellan did not travel to " + req.params.fileName)
	}			
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})