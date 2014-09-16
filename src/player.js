Molecule.sprite('player', 'assets/player.png')

Molecule.module('player', function (game) {
    var player = game.molecule.define({
        sprite: game.sprite.create('player'),

        init: function () {
            this.sprite.position.x = game.canvas.width / 2;
            this.sprite.position.y = game.canvas.height / 2;
            this.sprite.anchor.x = this.sprite.width / 2;
            this.sprite.anchor.y = this.sprite.height / 2;
        },

        update: function () {
            this.move();
            this.rotato();
        },

        move: function () {
            if (game.input.key.LEFT_ARROW) {
                this.sprite.position.x--;
            }

            if (game.input.key.RIGHT_ARROW) {
                this.sprite.position.x++;
            }

            if (game.input.key.UP_ARROW) {
                this.sprite.position.y--;
            } 

            if (game.input.key.DOWN_ARROW) {
                this.sprite.position.y++;
            }
        },

        rotato: function () {
            this.sprite.rotation++;
        }
    });

    return player;

});
