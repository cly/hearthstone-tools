var MyCollectionCardReader = require('./MyCollectionCardReader')

var MyCollectionCardsReader = function(gameWindow) {
    // AbstractButton.call(this, gameWindow)
    if (this.gameWindow.hasResolution(1024, 768)) {
        // Where are the things?
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }

    this.clickAnimation = 1000
}
// MyCollectionCardsReader.prototype = Object.create(AbstractButton.prototype)
MyCollectionCardsReader.prototype.constructor = MyCollectionCardsReader

module.exports = MyCollectionCardsReader
