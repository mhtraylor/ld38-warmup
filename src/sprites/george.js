import Phaser from 'phaser'
import Controller from '../core/controller'
import Animation from '../core/animation'

export default class George extends Phaser.Sprite {
  constructor (game, x, y, asset) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)

    // this.anim = new Animation([
    //   {
    //     name: 'walking',
    //     frames: [0, 1, 2],
    //     fps: 8,
    //     loop: true
    //   }
    // ], this)

    this.ctrl = new Controller([
      {
        name: 'moveUp',
        key: Phaser.Keyboard.UP
      },
      {
        name: 'moveDown',
        key: Phaser.Keyboard.DOWN
      },
      {
        name: 'moveLeft',
        key: Phaser.Keyboard.LEFT
      },
      {
        name: 'moveRight',
        key: Phaser.Keyboard.RIGHT
      }
    ], this.game)

    this.ctrl.moveDown(() => {
      this.y++
    })
    this.ctrl.moveUp(() => {
      this.y--
    })
    this.ctrl.moveLeft(() => {
      this.x--
      this.play('walking')
    })
    this.ctrl.moveRight(() => {
      this.x++
      this.play('walking')
    })
  }

  update () {
    this.ctrl.update()
  }
}
