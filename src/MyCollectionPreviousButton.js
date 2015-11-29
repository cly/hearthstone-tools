var Rect = require('./Rect')
var Button = require('./Button')

var MyCollectionPreviousButton = function(gameWindow) {
    Button.call(this, gameWindow)
    if (this.gameWindow.hasResolution(1024, 768)) {
        this.rect = new Rect(20, 370, 1, 1)
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }
}
MyCollectionPreviousButton.prototype = Object.create(Button.prototype)
MyCollectionPreviousButton.prototype.constructor = MyCollectionPreviousButton

module.exports = MyCollectionPreviousButton
