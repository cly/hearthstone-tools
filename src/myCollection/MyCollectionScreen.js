var AbstractScreen = require('../screen/AbstractScreen')
var MyCollectionNextPageButton = require('./MyCollectionNextPageButton')
var MyCollectionPreviousPageButton = require('./MyCollectionPreviousPageButton')

var MyCollectionScreen = function() {
    AbstractScreen.call(this)

    this.myCollectionNextPageButton = new MyCollectionNextPageButton()
    this.myCollectionPreviousPageButton = new MyCollectionPreviousPageButton()
}
MyCollectionScreen.prototype = Object.create(AbstractScreen.prototype)
MyCollectionScreen.prototype.constructor = MyCollectionScreen

module.exports = MyCollectionScreen
