var appConfig = {
  type: Phaser.AUTO,
  width: 1080,
  height: 1920,
  parent: 'phaser-app',
  backgroundColor: 0x000000,
  scale: {
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

var game = new Phaser.Game(appConfig);

var screenCenterX;
var screenCenterY;

function preload() {
  // Notes
  // -------------------------------
  // `this` is a scene object.
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

  screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
  screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
}

function create() {
  this.add.text(screenCenterX, screenCenterY, '윤재용 일병님 포에버!');

  this.input.on('pointerdown', (pointer) => {
    createBouncingRect(this, pointer.x, pointer.y);
  }, this);
}

function update() {

}

function createBouncingRect(scene, posX, posY) {
  var rec1 = scene.add.rectangle(posX, posY, 148, 148, 0x6666ff);

  scene.physics.add.existing(rec1);

  rec1.body.velocity.x = 500;
  rec1.body.velocity.y = 500;
  rec1.body.bounce.x = 1;
  rec1.body.bounce.y = 1;
  rec1.body.collideWorldBounds = true;
}