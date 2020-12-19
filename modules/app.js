export let screenCenter;
export let screenLTop;
export let screenRTop;
export let screenLBot;
export let screenRBot;

export function preload(scene) {
  screenCenter = new Phaser.Math.Vector2(scene.cameras.main.worldView.x + scene.cameras.main.width / 2, scene.cameras.main.worldView.y + scene.cameras.main.height / 2)
  screenLTop = new Phaser.Math.Vector2(0, 0);
  screenRTop = new Phaser.Math.Vector2(scene.cameras.main.worldView.x + scene.cameras.main.width, 0);
  screenLBot = new Phaser.Math.Vector2(0, scene.cameras.main.worldView.y + scene.cameras.main.height);
  screenRBot = new Phaser.Math.Vector2(scene.cameras.main.worldView.x + scene.cameras.main.width, scene.cameras.main.worldView.y + scene.cameras.main.height);
}