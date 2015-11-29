var Rect = require('./Rect')
var Button = require('./Button')

var MyCollectionNextButton = function(gameWindow) {
    Button.call(this, gameWindow)
    if (this.gameWindow.hasResolution(1024, 768)) {
        this.rect = new Rect(727, 370, 1, 1)
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }

    // Just a guess.
    this.clickAnimation = 1000
}
MyCollectionNextButton.prototype = Object.create(Button.prototype)
MyCollectionNextButton.prototype.constructor = MyCollectionNextButton

module.exports = MyCollectionNextButton
