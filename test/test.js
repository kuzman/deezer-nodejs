var util=require('util'),
    deezer=require('../lib/deezer'),
    express=require('express');

var host = "localhost"
	, port = "3000";

var app = express();


/**
 * Server starting
 */
app.get('/', function(req, res){
	var string='';
    deezer.getUserDetails("2529",function(data) {
    	console.log(data);
    	//res.send(util.inspect(data));
    });
    deezer.getTrackbyID("3135556", function(data){
    	console.log(data);
    	//res.send(util.inspect(data));
    });
	deezer.getRadioStations(function(data){
    	console.log(data);
    	//res.send(util.inspect(data));
    });
	deezer.getRadioStation("6", function(data){
    	console.log(data);
    	//res.send(util.inspect(data));
    });
	deezer.getPlaylist("4341978", function(data){
    	console.log(data);
    	res.send(util.inspect(data));
    });
});
app.listen(port,host);
util.log('started app');