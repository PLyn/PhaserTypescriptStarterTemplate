import * as Assets from '../assets';

const enum PlayerDirections
{
        P_UP,
        P_DOWN,
        P_LEFT,
        P_RIGHT
}
export default class Stage extends Phaser.State {
    private backgroundTemplateSprite: Phaser.Sprite = null;
    private pSprite: Phaser.Sprite = null;
    private P_SPEED: number;
    private availableBullets: Phaser.Group;

    public create(): void {
        this.backgroundTemplateSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, Assets.Images.ImagesBackgroundTemplate.getName());
        this.backgroundTemplateSprite.anchor.setTo(0.5);

        this.P_SPEED = 4;
        this.pSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 175, Assets.Spritesheets.SpritesheetsMetalslugMummy.getName());
        
        this.availableBullets = this.game.add.group();
    }

    public update(): void {
        if(this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
            this.pSprite.x -= this.P_SPEED; 
        else if(this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
            this.pSprite.x += this.P_SPEED; 
        else if(this.game.input.keyboard.isDown(Phaser.Keyboard.UP))
            this.pSprite.y -= this.P_SPEED; 
        else if(this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
            this.pSprite.y += this.P_SPEED; 
        
        

        this.backgroundTemplateSprite.inputEnabled = true;
        this.backgroundTemplateSprite.events.onInputDown.add(() => {
            //Fire bullet from player
            this.availableBullets.create(this.pSprite.x, this.pSprite.y, Assets.Spritesheets.SpritesheetsMetalslugMummy.getName());
        });
        
         this.availableBullets.forEachAlive(this.BulletAction, this);
    }

    private BulletAction(item){
        item.x += this.P_SPEED; 
    }

}
