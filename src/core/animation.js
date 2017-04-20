import 'phaser'

export default function (params, obj) {
  for (const { name, frames, fps, loop } of params) {
    obj.animations.add(name, frames, fps, loop)
  }

  obj.play = (a) => obj.animations.play(a)
}
