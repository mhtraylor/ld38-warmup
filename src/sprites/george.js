import Phaser from 'phaser';
import Controller from '../core/controller';
import CharacterController from '../core/character-controller';
import Animation from '../core/animation';

export default class George extends CharacterController
{
  constructor (game, x, y, asset)
  {
        var settings = {
            MAX_SPEED: 100,
            ACCELERATION: 20,
            DRAG: 10
        };


        var animations = [
        {
            name: 'walking',
            frames: [0, 1, 2],
            fps: 8,
            loop: true
        }];


        var controlMap = [
        {
            name: 'moveUp',
            key: Phaser.Keyboard.W
        },
        {
            name: 'moveDown',
            key: Phaser.Keyboard.S
        },
        {
            name: 'moveLeft',
            key: Phaser.Keyboard.A
        },
        {
            name: 'moveRight',
            key: Phaser.Keyboard.D
        }];

        super(game, x, y, asset, controlMap, animations, settings);
        this.anchor.setTo(0.5);
  }
}
