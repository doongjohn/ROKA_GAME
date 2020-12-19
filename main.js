import * as App from "./modules/app.js"
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

function preload() {
  // setup variables
  scene = this;

  // init App
  App.preload(scene);

  // init UI
  UI.preload(scene);

  // init player
  Player.preload(scene, App.screenCenter.x, App.screenCenter.y);
}

function create() {
  // create UI
  UI.create(scene);
}

function update() {
  Player.update();
  Player.updatePhysics();
}

