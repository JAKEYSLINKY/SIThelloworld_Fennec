import Phaser from "phaser";

let playButton;
let background;
let sound1;
class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: "MainMenu",
        });
    }

    preload() {
        this.load.image('startButton','src/GameScene/playButton.png')
        this.load.image('slimelogo','src/GameScene/Slimeking_logo.png')
        this.load.image('bg','src/GameScene/Mainpage.png')
        this.load.audio('sound1','src/GameScene/8bit-music-for-game-68698.mp3');
    }

    create() {
        background = this.add.image(960,540,'bg')
        sound1 = this.sound.add('sound1')
        var sound1Config = {
            mute: false,
            volume: 0.3,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        sound1.play(sound1Config);
        playButton = this.add.image(950,420,'startButton').setScale(0.5)
        //this.add.image(950,360,'slimelogo').setScale(2)
        playButton.setInteractive()
        playButton.on("pointerdown",()=>{
            this.scene.start("story")
            sound1.stop();
        })
    }

    update(delta, time) {
        
    }
}
export default MainMenu;