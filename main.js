// Initialize Phaser, and create a 400 x 490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv');

// Create our "main" state that will contain the game

var mainState = {
	preload:function(){
		// Change the background color of the game
		game.stage.backgroundColor = '#71c5cf';

		// Load the bird sprite
		game.load.image('bird', 'assets/bird.png');
	},

	create:function(){

	},

	update:function(){

	},
};

 // Add and start the "main" state to start the game
 game.state.add('main', mainState);
 game.state.start('main');
