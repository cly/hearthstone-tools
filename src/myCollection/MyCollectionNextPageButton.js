var Rect = require('../geometry/Rect')
var AbstractButton = require('../button/AbstractButton')

var MyCollectionNextPageButton = function(gameWindow) {
    AbstractButton.call(this, gameWindow)
    if (this.gameWindow.hasResolution(1024, 768)) {
        this.rect = new Rect(727, 370, 1, 1)
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }

    this.clickAnimation = 1000
}
MyCollectionNextPageButton.prototype = Object.create(AbstractButton.prototype)
MyCollectionNextPageButton.prototype.constructor = MyCollectionNextPageButton

module.exports = MyCollectionNextPageButton
