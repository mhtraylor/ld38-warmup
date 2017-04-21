import Phaser from 'phaser';
import Controller from '../core/controller';
import Animation from '../core/animation';


// Enums
const FacingDirection = { UP: 0, RIGHT: 1, DOWN: 2, LEFT: 3 };
const CharacterState = { IDLE: 0, WALK: 1 };


export default class CharacterController extends Phaser.Sprite
{
	constructor(game, x, y, asset, controlMap, animations)
	{
		super(game, x, y, asset);

		this.directionFacing = FacingDirection.RIGHT;
		this.characterState = CharacterState.IDLE;
		this.isHolding = false;

		this.settings = {
			MAX_SPEED: 100,
			ACCELERATION: 20,
			DRAG: 10
		};

		this.anim = new Animation(animations, this);
		this.ctrl = new Controller(controlMap, this.game);


		this.ctrl.moveDown(() => {
			this.y++;
		});

		this.ctrl.moveUp(() => {
			this.y--;
		});

		this.ctrl.moveLeft(() => {
			this.x--;
			this.play('walking');
		});

		this.ctrl.moveRight(() => {
			this.x++;
			this.play('walking');
    	});
	}


	update()
	{
		this.ctrl.update();
	}

}