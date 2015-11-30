var robot = require('robotjs')
var GameWindow = require('../GameWindow')

var AbstractScreen = function(gameWindow) {
    if (!(gameWindow instanceof GameWindow)) {
        throw new Error('`gameWindow` must be an instance of `GameWindow`.')
    }

    this.gameWindow = gameWindow
}

module.exports = AbstractScreen
