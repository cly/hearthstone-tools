var Rect = require('../geometry/Rect')
var AbstractButton = require('../button/AbstractButton')
var gameWindow = require('../gameWindow')

var MyCollectionButton = function() {
    AbstractButton.call(this)
    this.clickAnimation = 800
}
MyCollectionButton.prototype = Object.create(AbstractButton.prototype)
MyCollectionButton.prototype.constructor = MyCollectionButton

MyCollectionButton.prototype.getSize = function() {
    if (gameWindow.hasResolution(1024, 768)) {
        return new Rect(447, 599, 257, 102)
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }
}

module.exports = MyCollectionButton
