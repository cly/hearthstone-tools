var AbstractScreen = require('../screen/AbstractScreen')
var MyCollectionCardReader = require('./MyCollectionCardReader')
var MyCollectionNextPageButton = require('./MyCollectionNextPageButton')
var MyCollectionPreviousPageButton = require('./MyCollectionPreviousPageButton')

var MyCollectionScreen = function() {
    var self = this
    AbstractScreen.call(this)

    this.myCollectionCardReaders = []
    ;[0, 1].forEach(function(row) {
        ;[0, 1, 2, 3].forEach(function(column) {
            self.myCollectionCardReaders.push(new MyCollectionCardReader(row, column))
        })
    })
    this.myCollectionNextPageButton = new MyCollectionNextPageButton()
    this.myCollectionPreviousPageButton = new MyCollectionPreviousPageButton()

}
MyCollectionScreen.prototype = Object.create(AbstractScreen.prototype)
MyCollectionScreen.prototype.constructor = MyCollectionScreen

MyCollectionScreen.prototype.getCards = function() {
    for (var i = 1, ii = 8; i < ii; ++i) {
        this.myCollectionCardReaders[i].getCard()
    }
}

module.exports = MyCollectionScreen
