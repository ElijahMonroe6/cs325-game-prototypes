var Client = {};
Client.socket = io.connect();

Client.insertName(var name){
	
	Client.socket.emit('name add', name);
	
}

Clicent.socket.on('Game Start', function(){
	
	game.gameStart();
	
});