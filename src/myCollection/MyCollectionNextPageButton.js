var Rect = require('../geometry/Rect')
var AbstractButton = require('../button/AbstractButton')
var gameWindow = require('../gameWindow')

var MyCollectionNextPageButton = function() {
    AbstractButton.call(this)
    this.clickAnimation = 1000
}
MyCollectionNextPageButton.prototype = Object.create(AbstractButton.prototype)
MyCollectionNextPageButton.prototype.constructor = MyCollectionNextPageButton

MyCollectionNextPageButton.prototype.getSize = function() {
    if (gameWindow.hasResolution(1024, 768)) {
        return new Rect(727, 370, 1, 1)
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }
}

module.exports = MyCollectionNextPageButton
