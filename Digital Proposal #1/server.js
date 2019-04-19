//requirements of express for server stuff and socket.io for client - server communication; also db stuff
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var anyDB = require('any-db');
var conn = anyDB.createConnection('sqlite3://games.db');
var groupID = 0;
var partner = 0;
var gameID = 1;

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/usernames', function(req, res){
	
	var unique = usernameUnique(req.body.username);
	var uniqueArray = [unique];
	uniqueArray = JSON.stringfy(uniqueArray);
	res.json(uniqueArray);
	res.end();
	
}

io.on('connection', function(socket){
	
	socket.on('name add', function(name){
		
		var gameNum = gameID;
		if(partner == 1){
			groupID += 1
			partner = 0;
		}
		else{
			partner++;
		}
		conn.query('INSERT INTO usernames VALUES ($1, $2, $3);', [gameNum, name, groupID]);
		var players = 0;
		conn.query('SELECT * FROM usernames WHERE gameID == ($1);', [gameNum])
		.on('data', function(){
			
			players++;
				
		});
		.on('end', function(){
			
			if(players == 5){
				
				setTimeout(gameStart, 15000);
				
			}
			
		}
			
		socket.join("game " + gameNUM)
		
	});
	
});

private function gameStart(){
	
	io.to('game ' + gameID).emit('Game Start');
	gameID++;
	
}

private function usernameUnique(var inputName){
	
	var returnVal = true;
	
	conn.query('SELECT username FROM usernames WHERE username == ($1);', [inputName])
	.on('data', function(username){
		returnVal = false;
	})
	.on('end', function(){
		return returnVal;
	});
	
}

server.listen(8081,function(){ // Listens to port 8081
    console.log('Listening on '+server.address().port);
});