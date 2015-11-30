var Rect = require('../geometry/Rect')
var AbstractButton = require('../button/AbstractButton')

var MyCollectionButton = function(gameWindow) {
    AbstractButton.call(this, gameWindow)
    if (this.gameWindow.hasResolution(1024, 768)) {
        this.rect = new Rect(447, 599, 257, 102)
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }

    this.clickAnimation = 800
}
MyCollectionButton.prototype = Object.create(AbstractButton.prototype)
MyCollectionButton.prototype.constructor = MyCollectionButton

module.exports = MyCollectionButton
