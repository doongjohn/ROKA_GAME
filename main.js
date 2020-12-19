import * as Utils from "./modules/utils.js"
import * as Player from "./modules/player.js"
import * as UI from "./modules/ui.js"


// app config
var appConfig = {
  type: Phaser.AUTO,
  width: 1080,
  height: 1920,
  parent: 'phaser-app',
  backgroundColor: 0x000000,
  pixelArt: true,
  scale: {
    // keep screen aspect ratio
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  autoRound: false,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

// variables
var game = new Phaser.Game(appConfig);
var scene;
let screenCenter;
let screenLTop;
let screenRTop;
let screenLBot;
let screenRBot;

function preload() {
  scene = this;
  screenCenter = new Phaser.Math.Vector2(scene.cameras.main.worldView.x + scene.cameras.main.width / 2, scene.cameras.main.worldView.y + scene.cameras.main.height / 2)
  screenLTop = new Phaser.Math.Vector2(0, 0);
  screenRTop = new Phaser.Math.Vector2(scene.cameras.main.worldView.x + scene.cameras.main.width, 0);
  screenLBot = new Phaser.Math.Vector2(0, scene.cameras.main.worldView.y + scene.cameras.main.height);
  screenRBot = new Phaser.Math.Vector2(scene.cameras.main.worldView.x + scene.cameras.main.width, scene.cameras.main.worldView.y + scene.cameras.main.height);

  // init player
  Player.preload(scene, screenCenter.x, screenCenter.y);

  // load image
  this.load.image('ui-arrow-right', 'assets/ui-arrow-right.png');
}

function create() {
  var textConfig = {
    x: 0,
    y: 0,
    text: '윤재용 일병님 포에버!',
    style: {
      fontSize: '64px',
      fontFamily: 'Arial',
      color: '#ffffff',
      align: 'center',
    },
    addToScene: true
  };

  // `this` is a scene object.
  var testText = this.make.text(textConfig);
  testText.setPosition(screenCenter.x - (testText.displayWidth / 2), screenCenter.y)
  testText.depth = 1;

  var uiArrowRight = this.add.image(screenRBot.x - 160, screenRBot.y - 160, 'ui-arrow-right').setScale(10);

  var uiArrowLeft = this.add.image(screenLBot.x + 160, screenLBot.y - 160, 'ui-arrow-right').setScale(10);
  uiArrowLeft.flipX = true;
}

function update() {
  Player.update();
  Player.updatePhysics();
}

