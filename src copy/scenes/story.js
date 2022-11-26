import Phaser from "phaser";
let background;
let next;
let i=1;
let slime;
let platform;
let keyW;
let keyA;
let keyD;
let star;
let storySound;
let monster;
let v1,v2,v3,v4,v6,v7,v8;
class story extends Phaser.Scene {
    constructor(test) {
        super({
            key: "story",
        });
    }

    preload() {
        this.load.image('backg','src/GameScene/storyScene.png');
        this.load.image('t1','src/GameScene/text1.png');
        this.load.image('t2','src/GameScene/text2.png');
        this.load.image('t3','src/GameScene/text3.png');
        this.load.image('t4','src/GameScene/text4.png');
        this.load.image('t5','src/GameScene/text5.png');
        this.load.image('t6','src/GameScene/text6.png');
        this.load.image('t7','src/GameScene/text7.png');
        this.load.image('t8','src/GameScene/text8.png');
        this.load.spritesheet('slime', '/src/GameScene/spritesheet.png',
             { frameWidth: 317, frameHeight: 254 });
        this.load.image('floor','src/GameScene/floor.png')
        this.load.image('star','src/GameScene/kindpng_3039539.png');
        this.load.audio('storySound','src/GameScene/very-lush-and-swag-loop-74140.mp3')
        this.load.spritesheet('mon', 'src/GameScene/Female.png',
            { frameWidth: 32 , frameHeight: 32 });
        this.load.audio('v1','src/GameScene/1.mp3')
        this.load.audio('v2','src/GameScene/2.mp3')
        this.load.audio('v3','src/GameScene/3.mp3')
        this.load.audio('v4','src/GameScene/4.mp3')
        this.load.audio('v6','src/GameScene/6.mp3')
        this.load.audio('v7','src/GameScene/7.mp3')
        this.load.audio('v8','src/GameScene/8.mp3')
    }

    create() {
        background = this.add.image(960,540,'backg');
        storySound = this.sound.add('storySound',{loop:true},{volume: 0.001});
        var storySoundConfig = {
            mute: false,
            volume: 0.3,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        storySound.play(storySoundConfig);
        v1 = this.sound.add('v1',{volume: 3});
        v2 = this.sound.add('v2',{volume: 3});
        v3 = this.sound.add('v3',{volume: 3});
        v4 = this.sound.add('v4',{volume: 3});
        v6 = this.sound.add('v6',{volume: 3});
        v7 = this.sound.add('v7',{volume: 3});
        v8 = this.sound.add('v8',{volume: 3});

        //slime
        slime = this.physics.add.sprite(1400, 800, 'slime').setScale(0.5);
        this.physics.add.collider(slime);
        this.anims.create({
            key: 'slimeLeft',
            frames: this.anims.generateFrameNumbers('slime', {
                start: 5,
                end: 9
            }),
            duration: 1000,
            repeat: -1
        })
        this.anims.create({
            key: 'slimeRight',
             frames: this.anims.generateFrameNumbers('slime', {
                 start: 0,
                 end: 4
             }),
             duration: 1000,
             repeat: -1
         })
        this.input.on("pointerdown",()=>{
            if(i<=8){
                next = this.add.image(350,880,'t'+i);
                if(i==1){
                    v1.play();
                }
                if(i==2){
                    v2.play();
                }
                if(i==3){
                    v3.play();
                    monster = this.physics.add.sprite(1100,700,'mon').setScale(4);
                    this.anims.create({
                        key: 'monLeft',
                        frames : this.anims.generateFrameNumbers('mon',{
                            start: 3,
                            end: 5
                        }),
                        duration: 1000,
                        repeat: -1
                     })
                     this.anims.create({
                        key: 'monRight',
                        frames : this.anims.generateFrameNumbers('mon',{
                            start: 0,
                            end: 2
                        }),
                        duration: 1000,
                        repeat: -1
                     })

                     this.physics.add.collider(monster, platform);
                }
                if(i==4){
                    v4.play();
                }
                if(i==6){
                    v6.play();
                    star = this.add.sprite(1750,970,'star');
                }
                if(i==7){
                    v7.play();
                }
                else if(i==8){
                    v8.play();
                }
                i++;
            }
            else{
                this.scene.start("GameScene");
                storySound.stop();
            }
        })
        


         //
        platform = this.physics.add.staticGroup();
        platform.enableBody = true;
        platform.create(1020, 1040, 'floor').setScale(1.1).refreshBody();
        slime.setCollideWorldBounds(true);
        slime.setBounce(0.3);
        slime.body.setGravityY(300)
        this.physics.add.collider(slime, platform);

        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

    }

    update(delta, time) {
        if (keyA.isDown) {
            slime.setVelocityX(-250)
            slime.anims.play('slimeLeft', true); // waiting for spritesheet
        } else if (keyD.isDown) {
            slime.setVelocityX(250)
            slime.anims.play('slimeRight', true); // waiting for spritesheet
        } else {
            slime.setVelocityX(0)
            // slime.anims.play('slimeAni', false);
            slime.anims.play('slimeLeft', false);
            slime.anims.play('slimeRight', false); // waiting for spritesheet
        }
        if(keyW.isDown&&slime.body.touching.down) {
            slime.setVelocityY(-550);
            slime.anims.play('slimeleft', true);
        }
    }

}
export default story;
