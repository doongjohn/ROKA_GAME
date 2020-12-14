import * as Utils from "./modules/utils.js"
import * as Player from "./modules/player.js"


// app config
var appConfig = {
  type: Phaser.AUTO,
  width: 1080,
  height: 1920,
  parent: 'phaser-app',
  backgroundColor: 0x000000,
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
let screenCenterX;
let screenCenterY;

function preload() {
  scene = this;
  screenCenterX = scene.cameras.main.worldView.x + scene.cameras.main.width / 2;
  screenCenterY = scene.cameras.main.worldView.y + scene.cameras.main.height / 2;
  Player.init(scene, screenCenterX, screenCenterY);
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
  testText.setPosition(screenCenterX - (testText.displayWidth / 2), screenCenterY)
  testText.depth = 1;
}

function update() {
  Player.update();
  Player.updatePhysics();
}

