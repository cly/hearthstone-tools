var AbstractScreen = require('../screen/AbstractScreen')
var MyCollectionButton = require('./MyCollectionButton')

var MenuScreen = function() {
    this.myCollectionButton = new MyCollectionButton()
}
MenuScreen.prototype = Object.create(AbstractScreen.prototype)
MenuScreen.prototype.constructor = MenuScreen

module.exports = MenuScreen
