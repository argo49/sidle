Molecule({
    width: 640,
    height: 640,
    globals: {level: 1}
})
.tilemap('level1','assets/tilemaps/level1.json')
.tilemap('level2','assets/tilemaps/level2.json')
.ready(function (game) {

    game.tilemap.set('level1');
    game.input.enable('keyboard');
    game.molecule.add('player');


});

Molecule.sprite('goal', 'assets/tilemaps/environment.png', 32);

Molecule.module('goal', function (game, require) {
    return game.molecule.define({
        sprite: game.sprite.create('goal'),
        update: function () {
            //console.log(this.sprite.position.x, game.molecule.get('player')[0].sprite.position.x);
            if (this.sprite.position.x == game.molecule.get('player')[0].sprite.position.x) {
                console.log('A WINNER IS YOU');
                game.tilemap.remove();
                game.tilemap.set('level2');
            }
        }
    });
});