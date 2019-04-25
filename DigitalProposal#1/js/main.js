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
	var textInput = '';
	var button;
	var button2;
	var searchTerm;
	var style = { font: 'bold 15pt Gabriola', fill: 'black', align: 'left', wordWrap: true, wordWrapWidth: 780 };
	
	function preload(){
		game.load.spritesheet('button', 'assets/play_button.png', 193, 71);
		game.load.image('background', 'assets/paper.jpg', 800, 600);
	}
	
	function create(){
		
		var background = game.add.sprite(0, 0, 'background');
		var selectNum = Math.random();
		//var killer = killers[selectNum];
		var guessTry = 0;
		
		button = game.add.button( 150, 400, 'button', actionOnClick, this, 2, 1, 0);
		button2 = game.add.button( 457, 400, 'button', endGame, this, 2, 1, 0);

		text = game.add.text(10, 10, 'Tarun Asthaniya is found dead in his office at his desk. The police have narrowed the suspects down to three people: Mrs. Harish Kumar, Taruns wife Himanshi Asthaniya and his buisness partner Mr. Jason Negi . All three visited Tarun on the day of his murder, but all three provide the police with stories of explanation as to the reason for their visit.Police found Mr. tarun with his wrist watch still on his right arm, a torn up picture of his wife laying on the floor beside the trash can, and an ink pen in his right hand. On the desk, the police found a name plate, a telephone that was off the hook, and a personal calendar turned to the July 5th page with 7B91011 written on it. After examining this evidence, the police knew their suspect. Who was it?', style);

		/*var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

		text = game.add.text(game.world.centerX, game.world.centerY, "", style);

		text.anchor.set(0.5);
		
		game.input.keyboard.addCallbacks(this, null, null, keyPressed);
		
		button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);*/
		
	}
	
	function actionOnClick(){
		
		button.visible = false;
		button2.visible = false;
		text.destroy();
		text = game.add.text(10, 10, 'Please pass to the next player.', style);
		setTimeout(round, 15000);
		
	}
	
	function round(){
		
		button.visible = true;
		button2.visible = true;
		text.destroy();
		text = game.add.text(10, 10, 'Tarun Asthaniya is found dead in his office at his desk. The police have narrowed the suspects down to three people: Mrs. Harish Kumar, Taruns wife Himanshi Asthaniya and his buisness partner Mr. Jason Negi . All three visited Tarun on the day of his murder, but all three provide the police with stories of explanation as to the reason for their visit.Police found Mr. tarun with his wrist watch still on his right arm, a torn up picture of his wife laying on the floor beside the trash can, and an ink pen in his right hand. On the desk, the police found a name plate, a telephone that was off the hook, and a personal calendar turned to the July 5th page with 7B91011 written on it. After examining this evidence, the police knew their suspect. Who was it?', style);
		
	}
	
	function submitSearch(){
		
		if(textInput == 'Jason Negi'){
			
			text.destroy();
			text = game.add.text(10, 10, 'Right.', style);
			
		}
		else{
			
			text.destroy();
			text = game.add.text(10, 10, 'wrong', style);
			
		}
		
	}
	
	function endGame(){
		
		game.input.keyboard.addCallbacks(this, backspace, null, keyPressed);
		button.destroy();
		button2.destroy();
		text.destroy();
		text = game.add.text(10, 10, '', style);
		button = game.add.button( game.world.centerX - 96, 400, 'button', submitSearch, this, 2, 1, 0);
		
	}
	
	function backspace(key){
		
		$(document).bind("keydown", function (e) {
			if (e.keyCode == 8) { // backspace
				e.preventDefault()
		
			}
		});

		console.log(key.keyCode);
		if(key.keyCode == 8){
	
			console.log('backspace');
			
			if(textInput.length > 0){
				
				console.log('length');
				textInput = textInput.substr(0, textInput.length - 1);
				text.text = textInput;
			
			}
	
		}

	}
	
	function keyPressed(char){
		
		text.text = text.text.concat(char);
		textInput = textInput + char;
		console.log("here");
		
	}
	
	/*function keyPressed(char){
		
		text.text = text.text.concat(char);
		username = username + char;
		console.log("here");
		
	}*/
	/*
	function actionOnClick () {

		console.log("HERES WHERE I SEND IN USERNAME AND FIGURE OUT GAME STUFF");
		
		console.log(username);
		
		var unique;
		
		$.ajax({url:'/usernames.json', type: 'GET', async: false, data: {username : username}, success: function(response){
			
			var data = JSON.parse(response);
			console.log(data);
			unique = data[0];
			
		}});
		
		if(unique){
			
			console.log('here');
			
			//Client.insertName(username);
			
		}
		else{
			
			console.log(unique);
			var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
			game.add.text(game.world.centerX, game.world.centerY, "Username is already used.", style);
			
		}

	}
	
	
	function gameStart(){
		
		var background = game.add.sprite(0, 0, 'background');
		var selectNum = Math.random();
		var killer = killers[selectNum];
		while(guessTry == 0){

			text = game.add.text(10, 10, 'Tarun Asthaniya is found dead in his office at his desk. The police have narrowed the suspects down to three people: Mrs. Harish Kumar, Taruns wife Himanshi Asthaniya and his buisness partner Mr. Jason Negi . All three visited Tarun on the day of his murder, but all three provide the police with stories of explanation as to the reason for their visit.Police found Mr. tarun with his wrist watch still on his right arm, a torn up picture of his wife laying on the floor beside the trash can, and an ink pen in his right hand. On the desk, the police found a name plate, a telephone that was off the hook, and a personal calendar turned to the July 5th page with 7B91011 written on it. After examining this evidence, the police knew their suspect. Who was it ?' ');

		}			
		
	}*/
	
	
	/*
	function submitSearch(){
		
		Client.submitSearch(searchTerm, textInput);
		
	}
	
	function searchInput(char){
		
		searchTerm = searchTerm + char;
		
	}
	
	function gameStart(var playerNum){
		
		var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
			
		if(playerNum == 1){
			
			text.destroy();
			text = game.add.text(game.world.centerX, game.world.centerY, "What would you like to search first?", style);
			game.input.keyboard.addCallbacks(this, null, null, searchInput);
			button = game.add.button(game.world.centerX - 95, 400, 'button', submitSearch, this, 2, 1, 0);
			
		}
		else if(playerNum == 0){
			
			text.destroy();
			text = game.add.text(game.world.centerX, game.world.centerY, "Other player's turn.", style);
			button = game.add.button(game.world.centerX - 95, 400, 'button', submitMessage, this, 2, 1, 0);
			button.visible = false;
			
		}
		
	}
	
	function gamePlay(var playerNum, var textRecieved, var message, var partnerName){
		
		if(playerNum == 1){
			
			text.destroy();
			text = game.add.text(game.world.centerX, game.world.centerY, textRecieved + "/n/n" + message + "/n-" + partnerName, style);
			
		}
		else if(playerNum == 0){
			
			text = game.add.text(game.world.centerX, game.world.centerY, "Other player's turn.", style);
			button = game.add.button(game.world.centerX - 95, 400, 'button', submitMessage, this, 2, 1, 0);
			button.visible = false;
			
		}
		
	}
	*/
};
