var SimpleGame = (function () {
    function SimpleGame() {
        // create our phaser game
        // 800 - width
        // 600 - height
        // Phaser.AUTO - determine the renderer automatically (canvas, webgl)
        // 'content' - the name of the container to add our game to
        // { preload:this.preload, create:this.create} - functions to call for our states
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
    }
    SimpleGame.prototype.preload = function () {
        // add our logo image to the assets class under the
        // key 'logo'. We're also setting the background colour
        // so it's the same as the background colour in the image
        //this.game.load.image( 'logo', "assets/ds_logo.png" );
        //this.game.stage.backgroundColor = 0xB20059;
        this.game.state.add('GameStage', GameStage, false);
        this.game.state.add('GameLose', GameLose, false);
        this.game.state.add('GameWin', GameWin, false);
    };
    SimpleGame.prototype.create = function () {
        // add the 'logo' sprite to the game, position it in the
        // center of the screen, and set the anchor to the center of
        // the image so it's centered properly. There's a lot of
        // centering in that last sentence
        //var logo = this.game.add.sprite( this.game.world.centerX - 100, this.game.world.centerY, 'logo' );
        //logo.anchor.setTo( 0.5, 0.5 );
        this.game.state.start('GameStage');
    };
    SimpleGame.prototype.update = function () {
    };
    return SimpleGame;
}());
// when the page has finished loading, create our game
window.onload = function () {
    var game = new SimpleGame();
};
var PlayerObject = (function () {
    function PlayerObject() {
        this.hp = 1;
        this.Sprite = 'Ship';
    }
    return PlayerObject;
}());
var GameLose = (function () {
    function GameLose() {
        // create our phaser game
        // 800 - width
        // 600 - height
        // Phaser.AUTO - determine the renderer automatically (canvas, webgl)
        // 'content' - the name of the container to add our game to
        // { preload:this.preload, create:this.create} - functions to call for our states
    }
    GameLose.prototype.preload = function () {
    };
    GameLose.prototype.create = function () {
    };
    return GameLose;
}());
var GameStage = (function () {
    function GameStage() {
        // create our phaser game
        // 800 - width
        // 600 - height
        // Phaser.AUTO - determine the renderer automatically (canvas, webgl)
        // 'content' - the name of the container to add our game to
        // { preload:this.preload, create:this.create} - functions to call for our states
    }
    GameStage.prototype.preload = function () {
    };
    GameStage.prototype.create = function () {
        this.text = "- phaser -\n with a sprinkle of \n pixi dust.";
        this.style = { font: "65px Arial", fill: "#ff0044", align: "center" };
        this.game.add.text(this.game.world.centerX, 0, this.text, this.style);
    };
    return GameStage;
}());
var GameWin = (function () {
    function GameWin() {
        // create our phaser game
        // 800 - width
        // 600 - height
        // Phaser.AUTO - determine the renderer automatically (canvas, webgl)
        // 'content' - the name of the container to add our game to
        // { preload:this.preload, create:this.create} - functions to call for our states
    }
    GameWin.prototype.preload = function () {
    };
    GameWin.prototype.create = function () {
    };
    return GameWin;
}());
//# sourceMappingURL=game.js.map