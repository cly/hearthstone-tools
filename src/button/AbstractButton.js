var robot = require('robotjs')
var gameWindow = require('../gameWindow')

var AbstractButton = function() {}

AbstractButton.prototype.getCenter = function() {
    return (this.getSize().getCenter()).add(gameWindow.getOffset())
}

AbstractButton.prototype.getTopLeft = function() {
    return (this.getSize().getTopLeft()).add(gameWindow.getOffset())
}

AbstractButton.prototype.getBottomRight = function() {
    return (this.getSize().getBottomRight()).add(gameWindow.getOffset())
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
