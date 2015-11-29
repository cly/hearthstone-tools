var Rect = require('./Rect')
var Button = require('./Button')

var MyCollectionButton = function(gameWindow) {
    Button.call(this, gameWindow)
    if (this.gameWindow.hasResolution(1024, 768)) {
        this.rect = new Rect(447, 599, 257, 102)
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }
}
MyCollectionButton.prototype = Object.create(Button.prototype)
MyCollectionButton.prototype.constructor = MyCollectionButton

module.exports = MyCollectionButton
