import Phaser from "phaser";
let bgOver;
let playButton;
let over;

class GameOver extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameOver",
        });
    }

    preload() {
        this.load.image('gameOver','src/GameScene/GameOverButWeeb.png');
        this.load.image('restart','src/GameScene/pngkey.com-replay-png-2243342.png');
        this.load.audio('over','src/GameScene/videogame-death-sound-43894.mp3');
    }

    create() {
        bgOver = this.add.image(960,540,'gameOver')
        over = this.sound.add('over');
        var overConfig = {
            mute: false,
            volume: 0.3,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        over.play(overConfig);
        playButton = this.add.image(960,530,'restart').setScale(0.5)
        //this.add.image(950,360,'slimelogo').setScale(2)
        //theOtherScene = this.scene.get('GameOver');
        playButton.setInteractive()
        playButton.on("pointerdown",()=>{
            this.scene.start("MainMenu")
        })
    }

    update(delta, time) {
    }
}
export default GameOver;