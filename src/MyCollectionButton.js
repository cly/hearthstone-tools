var robot = require('robotjs')
var GameWindow = require('./GameWindow')
var Point = require('./Point')
var Rect = require('./Rect')

var MyCollectionButton = function(gameWindow) {
    if (!(gameWindow instanceof GameWindow)) {
        throw new Error('`gameWindow` must be an instance of `GameWindow`.')
    }

    this.gameWindow = gameWindow

    if (this.gameWindow.hasResolution(1024, 768)) {
        this.rect = new Rect(447, 599, 257, 102)
        // this.rect = new Rect(1347, 599, 257, 102)
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }
}

MyCollectionButton.prototype.getCenter = function() {
    return (this.rect.getCenter()).add(this.gameWindow.getOffset())
}

MyCollectionButton.prototype.getTopLeft = function() {
    return (this.rect.getTopLeft()).add(this.gameWindow.getOffset())
}

MyCollectionButton.prototype.getBottomRight = function() {
    return (this.rect.getBottomRight()).add(this.gameWindow.getOffset())
}

MyCollectionButton.prototype.click = function() {
    robot.moveMouseSmooth(...this.getCenter().toArray())
    robot.mouseClick()
}

module.exports = MyCollectionButton
