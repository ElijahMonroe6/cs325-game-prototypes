var Client = {};
Client.socket = io.connect();


Client.usernameUnique(var name){
	
	Client.socket.emit('name check', name);
	
}

Client.insertName(var name){
	
	Client.socket.emit('name add', name);
	
}

Clicent.socket.on('Game Start', function(){
	
	
	
});