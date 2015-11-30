var AbstractScreen = require('../screen/AbstractScreen')
var MyCollectionButton = require('./MyCollectionButton')

var MenuScreen = function(gameWindow) {
    AbstractScreen.call(this, gameWindow)

    this.myCollectionButton = new MyCollectionButton(gameWindow)
}
MenuScreen.prototype = Object.create(AbstractScreen.prototype)
MenuScreen.prototype.constructor = MenuScreen

module.exports = MenuScreen
