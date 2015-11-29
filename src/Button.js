var robot = require('robotjs')
var GameWindow = require('./GameWindow')

var Button = function(gameWindow) {
    if (!(gameWindow instanceof GameWindow)) {
        throw new Error('`gameWindow` must be an instance of `GameWindow`.')
    }

    this.gameWindow = gameWindow
}

Button.prototype.getCenter = function() {
    return (this.rect.getCenter()).add(this.gameWindow.getOffset())
}

Button.prototype.getTopLeft = function() {
    return (this.rect.getTopLeft()).add(this.gameWindow.getOffset())
}

Button.prototype.getBottomRight = function() {
    return (this.rect.getBottomRight()).add(this.gameWindow.getOffset())
}

Button.prototype.click = function() {
    robot.moveMouseSmooth(...this.getCenter().toArray())
    robot.mouseClick()
}

module.exports = Button
