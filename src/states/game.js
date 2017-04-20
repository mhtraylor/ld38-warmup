/* globals __DEV__ */
import Phaser from 'phaser'
import George from '../sprites/george'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Hello World'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.george = new George(
      this,
      this.world.centerX,
      this.world.centerY,
      'george-test'
    )

    this.game.add.existing(this.george)
    //  In this example we'll create 4 specific keys (up, down, left, right) and monitor them in our update function
    this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP)
    this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
    this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.george, 32, 32)
    }

    // if (this.upKey.isDown) {
    //   this.george.y--
    // } else if (this.downKey.isDown) {
    //   this.george.y++
    // }

    // if (this.leftKey.isDown) {
    //   this.george.x--
    // } else if (this.rightKey.isDown) {
    //   this.george.x++
    // }
  }
}
