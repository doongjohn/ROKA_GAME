# Notes for Phaser 3

---

Use scene object to spawn objects. [API Doc](photonstorm.github.io/phaser3-docs/Phaser.Scene.html)

How to create some common game objects. [API Doc](photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectFactory.html)

About physic [API Doc](photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.ArcadePhysics.html)

Nice refs
- phaser.io/examples/v3
- rexrainbow.github.io/phaser3-rex-notes/docs/site/
- medium.com/analytics-vidhya/getting-started-with-phaserjs-a81f1e228108

---

create text

```js
var textConfig = {
  x: 0,
  y: 0,
  padding: {
    left: 64,
    right: 16,
    top: 20,
    bottom: 40
    x: 32,    // 32px padding on the left/right
    y: 16     // 16px padding on the top/bottom
  },
  text: '윤재용 일병님 포에버!',
  style: {
    fontSize: '64px',
    fontFamily: 'Arial',
    color: '#ffffff',
    align: 'center',  // 'left'|'center'|'right'|'justify'
    backgroundColor: '#ff00ff'
  },
  addToScene: true
};

var testText = this.make.text(textConfig);
testText.setPosition(x, y)
testText.depth = 1; // draw order
```

---

click event

```js
this.input.on('pointerdown', (pointer) => {
  var rec = scene.add.rectangle(pointer.x, pointer.y, 148, 148, 0x6666ff);
  scene.physics.add.existing(rec);
  rec.body.velocity.x = 500;
  rec.body.velocity.y = 500;
  rec.body.bounce.x = 1;
  rec.body.bounce.y = 1;
  rec.body.collideWorldBounds = true;
}, this);
```

---