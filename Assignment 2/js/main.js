"use strict";

window.onload = function() {
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
	var tileSet;
    var player1;
	var player2;
	var lasers1 = new Array();
	var lasers2 = new Array();
	var gameOver = false;
	var text;
	
    function preload() {
        // Load an image and call it 'logo'.
        game.load.image( 'Turrent', 'assets/turrent.png' );
        game.load.image( 'Turrent_reversed', 'assets/turrentr.png' );
		game.load.image('sky', 'assets/sky');
		game.load.image('laser', 'assets/laser.png');
    }
    
    function create() {
        
		tileSet = game.add.tileSprite(0, 0, 800, 600, 'sky');
		player1 = game.add.sprite(0, 0, 'Turrent');
		player2 = game.add.sprite(767, 0, 'Turrent_reversed');
		
    }
    
    function update() {
		for(var i = 0; i < lasers1.length; i++){
			if(lasers1[i].x >= 800){
				
				text = game.add.text(200, 250, "Player1 WINS!", { font: "65px Arial", fill: "#ff0044", align: "center" });
				gameOver = true;
				
			}
		}
		for(var i = 0; i < lasers2.length; i++){
			if(lasers2[i].x <= 0){
				
				text = game.add.text(200, 250, "Player2 WINS!", { font: "65px Arial", fill: "#ff0044", align: "center" });
				gameOver = true;
				
			}
		}
		if(gameOver == false){
			for(var i = 0; i < lasers1.length; i++){
				
				lasers1[i].x += 7;

				if(lasers1[i].x >= 767 && lasers1[i].y + 8 >= player2.y && lasers1[i].y <= player2.y + 60){
					
					lasers2[lasers2.length] = lasers1[i];
					lasers1.splice(i, 1);
					
				}
				
			}
			
			for(var i = 0; i < lasers2.length; i++){
				
				lasers2[i].x -= 7;
				
				if(lasers2[i].x >= 767 && lasers2[i].y + 8 >= player1.y && lasers1[i].y <= player1.y + 60){
					
					lasers1[lasers1.length] = lasers2[i];
					lasers2.splice(i, 1);
					
				}
				
			}
			
			if(game.input.keyboard.isDown(Phaser.Keyboard.W) && player1.y > 0){
				
				player1.y -= 4;
				
			}
			else if(game.input.keyboard.isDown(Phaser.Keyboard.S) && player1.y < 539){
				
				player1.y += 4;
				
			}
			
			if(game.input.keyboard.isDown(Phaser.Keyboard.I) && player2.y > 0){
				
				player2.y -= 4;
				
			}
			else if(game.input.keyboard.isDown(Phaser.Keyboard.K) && player2.y < 539){
				
				player2.y += 4;
				
			}
			
			if(game.input.keyboard.isDown(Phaser.Keyboard.X)){
				
				lasers1[lasers1.length] = game.add.sprite(player1.x + 33, player1.y + 26, 'laser');
				
			}
			if(game.input.keyboard.isDown(Phaser.Keyboard.M)){
				
				lasers2[lasers2.length] = game.add.sprite(player2.x - 33, player2.y + 26, 'laser');
				
			}
		}
		
    }
};
