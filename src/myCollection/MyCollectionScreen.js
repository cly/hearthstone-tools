var AbstractScreen = require('../screen/AbstractScreen')
var MyCollectionNextPageButton = require('./MyCollectionNextPageButton')
var MyCollectionPreviousPageButton = require('./MyCollectionPreviousPageButton')

var MyCollectionScreen = function(gameWindow) {
    AbstractScreen.call(this, gameWindow)

    this.myCollectionNextPageButton = new MyCollectionNextPageButton(gameWindow)
    this.myCollectionPreviousPageButton = new MyCollectionPreviousPageButton(gameWindow)
}
MyCollectionScreen.prototype = Object.create(AbstractScreen.prototype)
MyCollectionScreen.prototype.constructor = MyCollectionScreen

module.exports = MyCollectionScreen
