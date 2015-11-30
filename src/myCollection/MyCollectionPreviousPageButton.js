var Rect = require('../geometry/Rect')
var AbstractButton = require('../button/AbstractButton')
var gameWindow = require('../gameWindow')

var MyCollectionPreviousPageButton = function(gameWindow) {
    AbstractButton.call(this, gameWindow)
    this.clickAnimation = 1000
}
MyCollectionPreviousPageButton.prototype = Object.create(AbstractButton.prototype)
MyCollectionPreviousPageButton.prototype.constructor = MyCollectionPreviousPageButton

MyCollectionPreviousPageButton.prototype.getPolygon = function() {
    if (gameWindow.hasResolution(1024, 768)) {
        return new Rect(20, 370, 1, 1)
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }
}

module.exports = MyCollectionPreviousPageButton
