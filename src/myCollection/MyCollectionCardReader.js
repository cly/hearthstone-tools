var AbstractReader = require('../reader/AbstractReader')
var gameWindow = require('../gameWindow')
var Rect = require('../geometry/Rect')

var MyCollectionCardReader = function(row, column) {
    AbstractReader.call(this)

    // 0 based.
    this.row = row
    this.column = column
}
MyCollectionCardReader.prototype = Object.create(AbstractReader.prototype)
MyCollectionCardReader.prototype.constructor = MyCollectionCardReader

MyCollectionCardReader.prototype.getPolygon = function() {
    if (gameWindow.hasResolution(1024, 768)) {
        // Card locations are kind of crazy.
        if (this.row === 0) {
            if (this.column === 0) {
                return new Rect(40, 182, 155, 229)
            } else if (this.column === 1) {
                return new Rect(213, 182, 154, 229)
            } else if (this.column === 2) {
                return new Rect(385, 182, 153, 229)
            } else if (this.column === 3) {
                return new Rect(558, 182, 153, 229)
            }
        } else if (this.row === 1) {
            if (this.column === 0) {
                return new Rect(40, 454, 155, 228)
            } else if (this.column === 1) {
                return new Rect(213, 454, 154, 228)
            } else if (this.column === 2) {
                return new Rect(385, 454, 153, 228)
            } else if (this.column === 3) {
                return new Rect(558, 454, 153, 228)
            }
        }
        throw new Error('`row` must be between 0 and 1 inclusive. `column` must be between 0 and 3 inclusive')
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }
}

MyCollectionCardReader.prototype.getCard = function() {

}

module.exports = MyCollectionCardReader
