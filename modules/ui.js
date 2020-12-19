import * as App from "./app.js"
import * as Player from "./player.js"


export function preload(scene) {
  // load images
  scene.load.image('ui-arrow-right', 'assets/ui-arrow-right.png');
}

export function create(scene) {
  // create ui
  var uiArrowRight = scene.add.image(App.screenRBot.x - 160, App.screenRBot.y - 160, 'ui-arrow-right').setScale(10).setInteractive();
  var uiArrowLeft = scene.add.image(App.screenLBot.x + 160, App.screenLBot.y - 160, 'ui-arrow-right').setScale(10).setInteractive();

  uiArrowRight.depth = 999;
  uiArrowLeft.depth = 999;
  uiArrowLeft.flipX = true;

  uiArrowRight.on('pointerdown', (pointer) => {
    Player.walkInputDir.x = 1;
  });
  uiArrowLeft.on('pointerdown', (pointer) => {
    Player.walkInputDir.x = -1;
  });
}