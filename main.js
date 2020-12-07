// This is a mobile game made with Phaser 3

// Notes
// -------------------------------
// Use scene object to spawn objects.
// API Doc: photonstorm.github.io/phaser3-docs/Phaser.Scene.html
//
// How to create some common game objects.
// API Doc: photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectFactory.html
//
// About physics
// API Doc: photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.ArcadePhysics.html
//
// Nice refs
// - phaser.io/examples/v3
// - rexrainbow.github.io/phaser3-rex-notes/docs/site/
// - medium.com/analytics-vidhya/getting-started-with-phaserjs-a81f1e228108
// -------------------------------

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

// player
var player;
var movementKeys;
var moveSpeed = 500;
var moveVec = Phaser.Math.Vector2.ZERO;
var walkInputDir = Phaser.Math.Vector2.ZERO;

function getWalkDir(inputDir, plusKey, minusKey) {
  var dir = inputDir;
  if (!plusKey.isDown && !minusKey.isDown) {
    return 0;
  }
  if (Phaser.Input.Keyboard.JustDown(plusKey) || (plusKey.isDown && Phaser.Input.Keyboard.JustUp(minusKey))) {
    dir = 1;
  }
  if (Phaser.Input.Keyboard.JustDown(minusKey) || (minusKey.isDown && Phaser.Input.Keyboard.JustUp(plusKey))) {
    dir = -1;
  }
  return dir;
}

function createBouncingRect(posX, posY) {
  var rec = scene.add.rectangle(posX, posY, 148, 148, 0x6666ff);
  scene.physics.add.existing(rec);
  rec.body.velocity.x = 500;
  rec.body.velocity.y = 500;
  rec.body.bounce.x = 1;
  rec.body.bounce.y = 1;
  rec.body.collideWorldBounds = true;
}


function preload() {
  scene = this;
  screenCenterX = scene.cameras.main.worldView.x + scene.cameras.main.width / 2;
  screenCenterY = scene.cameras.main.worldView.y + scene.cameras.main.height / 2;
  movementKeys = scene.input.keyboard.addKeys('W,S,A,D');
}

function create() {
  // this.input.on('pointerdown', (pointer) => {
  //   createBouncingRect(pointer.x, pointer.y);
  // }, this);

  var textConfig = {
    x: 0,
    y: 0,
    padding: {
      // left: 64,
      // right: 16,
      // top: 20,
      // bottom: 40
      // x: 32,    // 32px padding on the left/right
      // y: 16     // 16px padding on the top/bottom
    },
    text: '윤재용 일병님 포에버!',
    style: {
      fontSize: '64px',
      fontFamily: 'Arial',
      color: '#ffffff',
      align: 'center',  // 'left'|'center'|'right'|'justify'
      // backgroundColor: '#ff00ff'
    },
    addToScene: true
  };

  // `this` is a scene object.
  var testText = this.make.text(textConfig);
  testText.setPosition(screenCenterX - (testText.displayWidth / 2), screenCenterY)
  testText.depth = 1;

  // create player
  player = scene.add.rectangle(screenCenterX, screenCenterY, 148, 148, 0x116fff);
  scene.physics.add.existing(player);
  player.body.collideWorldBounds = true;
}

function update() {
  walkInputDir.y = getWalkDir(walkInputDir.y, movementKeys.S, movementKeys.W);
  walkInputDir.x = getWalkDir(walkInputDir.x, movementKeys.D, movementKeys.A);
  moveVec = walkInputDir.clone();
  moveVec.normalize();
  moveVec.x *= moveSpeed;
  moveVec.y *= moveSpeed;
  player.body.velocity = moveVec;
}

