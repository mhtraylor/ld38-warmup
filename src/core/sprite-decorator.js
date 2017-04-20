import 'phaser'

export default function Sprite (params) {
  return function (target) {
    if (params) {
      if (!target.prototype.sprite) {
        const sprite = params.game.add.sprite(0, 0, params.asset)
        sprite.anchor.setTo(params.anchor ? params.anchor : 0.5)
        if (params.animations) {
          for (const anim of params.animations) {
            sprite.animations.add(
              anim.name,
              anim.frames,
              anim.fps,
              anim.loop
            )
          }
        }
      }
    }
  }
}
