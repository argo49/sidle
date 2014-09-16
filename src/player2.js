Molecule.sprite('player', 'assets/player2.png', 32, 32);

Molecule.module('player', function (game) {
    var player = game.molecule.define({
        sprite: game.sprite.create('player'),

        init: function () {
            this.sprite.position.x = 512;
            this.sprite.position.y = 512;

            //this.sprite.anchor.x = this.sprite.width / 2;
            //this.sprite.anchor.y = this.sprite.height / 2;

            this.sprite.speed.max.x = this.topSpeed;
            this.sprite.speed.max.y = this.topSpeed;

        },

        topSpeed: 10,

        update: function () {
            this.checkIsMoving();
            this.move();
        },

        move: function () {

            if (!this.isMoving) {

                if (game.input.key.RIGHT_ARROW) {
                    this.sprite.acceleration.x = this.topSpeed;
                }

                else if (game.input.key.LEFT_ARROW) {
                   this.sprite.acceleration.x = -this.topSpeed;
                }

                else if (game.input.key.UP_ARROW) {
                    this.sprite.acceleration.y = -this.topSpeed;
                }

                else if (game.input.key.DOWN_ARROW) {
                    this.sprite.acceleration.y = this.topSpeed;
                } 

            } 

        },

        isMoving: false,

        checkIsMoving: function () {
            this.isMoving = !(this.sprite.speed.x == 0 && this.sprite.speed.y == 0);
        },

        
    });

    return player;

});
