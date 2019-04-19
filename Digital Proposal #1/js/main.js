window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/v2.6.2/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    var game = new Phaser.Game( 800, 600, Phaser.CANVAS, 'game', {create: create, preload:preload});
	var text;
	var textInput;
	var button;
	
	function preload(){
		game.load.spritesheet('button', 'assets/play_button.png', 193, 213);
	}
	
	function create(){
		
		var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

		text = game.add.text(game.world.centerX, game.world.centerY, "", style);

		text.anchor.set(0.5);
		
		game.input.keyboard.addCallbacks(this, null, null, keyPressed);
		
		button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);
		
	}
	
	function keyPressed(char){
		
		text.text = text.text.concat(char);
		textInput = textInput + char;
		console.log("here");
		
	}
	
	function actionOnClick () {

		console.log("HERES WHERE I SEND IN USERNAME AND FIGURE OUT GAME STUFF");
		
		var unique;
		
		$.get('/usernames.json', function(response){
			// we have an unordered list of messages
			var ul = document.getElementById('message_list');
			var data = JSON.parse(response);
			console.log(data);
			unique = data[0];
		});
		
		if(unique){
			
			console.log('here');
			
			Client.insertName(textInput);
			
		}
		else{
			
			game.add.text(game.world.centerX, game.world.centerY, "Username is already used.", style);
			
		}

	}
	
};
