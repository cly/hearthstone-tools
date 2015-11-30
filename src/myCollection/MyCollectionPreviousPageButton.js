var Rect = require('../geometry/Rect')
var AbstractButton = require('../button/AbstractButton')

var MyCollectionPreviousPageButton = function(gameWindow) {
    AbstractButton.call(this, gameWindow)
    if (this.gameWindow.hasResolution(1024, 768)) {
        this.rect = new Rect(20, 370, 1, 1)
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }

    // Just a guess.
    this.clickAnimation = 1000
}
MyCollectionPreviousPageButton.prototype = Object.create(AbstractButton.prototype)
MyCollectionPreviousPageButton.prototype.constructor = MyCollectionPreviousPageButton

module.exports = MyCollectionPreviousPageButton
