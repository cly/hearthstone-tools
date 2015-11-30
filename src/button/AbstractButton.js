var robot = require('robotjs')
var GameWindow = require('../GameWindow')

var AbstractButton = function(gameWindow) {
    if (!(gameWindow instanceof GameWindow)) {
        throw new Error('`gameWindow` must be an instance of `GameWindow`.')
    }

    this.gameWindow = gameWindow
}

AbstractButton.prototype.getCenter = function() {
    return (this.rect.getCenter()).add(this.gameWindow.getOffset())
}

AbstractButton.prototype.getTopLeft = function() {
    return (this.rect.getTopLeft()).add(this.gameWindow.getOffset())
}

AbstractButton.prototype.getBottomRight = function() {
    return (this.rect.getBottomRight()).add(this.gameWindow.getOffset())
}

AbstractButton.prototype.click = function() {
    return new Promise((resolve, reject) => {
        robot.moveMouseSmooth(...this.getCenter().toArray())
        robot.mouseClick()

        if (!this.clickAnimation) {
            throw new Error('A `clickAnimation` must be provided for `AbstractButton`.')
        }

        setTimeout(function() {
            return resolve()
        }, this.clickAnimation)
    })
}

module.exports = AbstractButton
