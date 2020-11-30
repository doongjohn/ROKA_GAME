var appConfig = {
  type: Phaser.AUTO,
  width: 1080,
  height: 1920,
  parent: 'phaser-app',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  autoRound: false,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(appConfig);

function preload() {
  
}

function create() {
  var rec1 = this.add.rectangle(200, 150, 148, 148, 0x6666ff);

  this.physics.add.existing(rec1);

  rec1.body.velocity.x = 100;
  rec1.body.velocity.y = 100;
  rec1.body.bounce.x = 1;
  rec1.body.bounce.y = 1;
  rec1.body.collideWorldBounds = true;
}

function update() {

}