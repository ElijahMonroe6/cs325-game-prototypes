var menu = {
    preload: function () {

    },





    create: function () {
        game.add.text(160, 80, "That Dog that Can't stop thinking about those ghosts he saw last night\n and really just needs to take a nap.\nPress Enter to start\nUse the WASD/Arrow keys to move around. Use the mouse to bark.", { fill: 'white', align: 'center'});
        //game.add.text(160, 160, "Press Shift To Start With out Battle Royale", { fill: 'white' });
        enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        shiftKey = game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);

    },







    update: function () {
        if (enterKey.isDown) {
            game.state.start("HomingStarsV2", true, false);
        }
        


    }
};
