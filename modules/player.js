import * as Utils from "./utils.js"


export var player;
export var movementKeys;
export var moveSpeed = 500;
export var moveVec = Phaser.Math.Vector2.ZERO;
export var walkInputDir = Phaser.Math.Vector2.ZERO;


export function init(scene, posX, posY) {
  player = scene.add.rectangle(posX, posY, 148, 148, 0x116fff);
  scene.physics.add.existing(player);
  player.body.collideWorldBounds = true;
  movementKeys = scene.input.keyboard.addKeys('W,S,A,D');
}

export function update() {
  // get walk vector
  walkInputDir.y = getWalkDir(walkInputDir.y, movementKeys.S, movementKeys.W);
  walkInputDir.x = getWalkDir(walkInputDir.x, movementKeys.D, movementKeys.A);

  // set move vector
  moveVec = Utils.mult(walkInputDir.clone().normalize(), moveSpeed);
}

export function updatePhysics() {
  player.body.velocity = moveVec;
}

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