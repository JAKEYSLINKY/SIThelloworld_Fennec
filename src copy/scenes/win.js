import Phaser from "phaser";
let background;
let Button;
let victory;

class win extends Phaser.Scene {
    constructor(test) {
        super({
            key: "win",
        });
    }

    preload() {
        this.load.image('back','src/GameScene/win.png');
        this.load.image('restart','src/GameScene/pngkey.com-replay-png-2243342.png');
        this.load.audio('victory','src/GameScene/ccs3-83502.mp3')
    }

    create() {
        background = this.add.image(960,540,'back')
        victory = this.sound.add('victory',{loop:true});
        var victoryConfig = {
            mute: false,
            volume: 0.3,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        victory.play(victoryConfig)
        Button = this.add.image(300,850,'restart').setScale(0.5)
        //this.add.image(950,360,'slimelogo').setScale(2)
        //theOtherScene = this.scene.get('GameOver');
        Button.setInteractive()
        Button.on("pointerdown",()=>{
            this.scene.start("GameScene")
            victory.stop()
        })
    }

    update(delta, time) {
    }
}
export default win;