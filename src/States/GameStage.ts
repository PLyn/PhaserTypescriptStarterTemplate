class GameStage{
    game:Phaser.Game;
	text: string;
	style: Phaser.PhaserTextStyle;
	constructor()
	{
		// create our phaser game
		// 800 - width
		// 600 - height
		// Phaser.AUTO - determine the renderer automatically (canvas, webgl)
		// 'content' - the name of the container to add our game to
		// { preload:this.preload, create:this.create} - functions to call for our states
		this.game = new Phaser.Game( 800, 600, Phaser.AUTO, 'content', { preload:this.preload, create:this.create} );

    }
	preload()
	{
		
	}
	
	create()
	{
		this.text = "- phaser -\n with a sprinkle of \n pixi dust.";
    	this.style = { font: "65px Arial", fill: "#ff0044", align: "center" };

    	this.game.add.text(this.game.world.centerX-300, 0, this.text, this.style);

	}   
}