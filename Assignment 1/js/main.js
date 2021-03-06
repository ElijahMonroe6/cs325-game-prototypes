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
	var cursors;
	var player;
	
    function preload() {
        // Load an image and call it 'logo'.
        game.load.image( 'logo', 'assets/phaser.png' );
		game.load.image('sky', 'assets/sky.png');
		game.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }
    
    //var bouncy;
    
    function create() {
        
		tileSet = game.add.tileSprite(0, 0, 800, 600, 'sky');
		player = game.add.sprite(100, 450, 'dude');
		
		cursors = game.input.keyboard.createCursorKeys();
		
    }
    
    function update() {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        //bouncy.rotation = game.physics.arcade.accelerateToPointer( bouncy, game.input.activePointer, 500, 500, 500 );
		
		if (cursors.left.isDown)
		{
			tileSet.tilePosition.x += 8;
		}
		else if (cursors.right.isDown)
		{
			tileSet.tilePosition.x -= 8;
		}

		
    }
};
