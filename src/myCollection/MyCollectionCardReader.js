var robot = require('robotjs')
var tinycolor = require('tinycolor2')

var AbstractReader = require('../reader/AbstractReader')
var BinaryMap = require('../geometry/BinaryMap')
var Digit = require('../template/Digit')
var gameWindow = require('../gameWindow')
var Rect = require('../geometry/Rect')

var digit = new Digit()

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
                return new Rect(40, 137, 155, 229)
            } else if (this.column === 1) {
                return new Rect(213, 137, 154, 229)
            } else if (this.column === 2) {
                return new Rect(385, 137, 153, 229)
            } else if (this.column === 3) {
                return new Rect(558, 137, 153, 229)
            }
        } else if (this.row === 1) {
            if (this.column === 0) {
                return new Rect(40, 409, 155, 228)
            } else if (this.column === 1) {
                return new Rect(213, 409, 154, 228)
            } else if (this.column === 2) {
                return new Rect(385, 409, 153, 228)
            } else if (this.column === 3) {
                return new Rect(557, 409, 153, 228)
            }
        }
        throw new Error('`row` must be between 0 and 1 inclusive. `column` must be between 0 and 3 inclusive')
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }
}

// Should only be used for testing. Basically creates the test mask.
MyCollectionCardReader.prototype.getCostTemplate = function() {
    var polygon = this.getPolygon()
    var width = 45
    var height = 30
    var costPolygon = new Rect(polygon.x - 5, polygon.y - 5, width, height)
    var points = costPolygon.getPoints()

    var template = points
    .map((point) => point.add(gameWindow.getOffset()))
    .map((screenPoint) => robot.getPixelColor(screenPoint.x, screenPoint.y))
    .map((color) => tinycolor('#' + color).getLuminance())
    .map((luminance) => (luminance >= 0.98 ? 1 : 0))

    var map = new BinaryMap(template, width, height)
    console.log(map.toPrettyString())
}

MyCollectionCardReader.prototype.getCost = function() {
    var polygon = this.getPolygon()
    var costPolygon = new Rect(polygon.x - 5, polygon.y - 5, 45, 30)
    var points = costPolygon.getPoints()

    var template = points
    .map((point) => point.add(gameWindow.getOffset()))
    .map((screenPoint) => robot.getPixelColor(screenPoint.x, screenPoint.y))
    .map((color) => tinycolor('#' + color).getLuminance())
    .map((luminance) => (luminance >= 0.98 ? 1 : 0))

    var testMap = new BinaryMap(template, 45, 30)

    var digits = digit.getAll()

    var keys = Object.keys(digits)
    var smallestVariance
    var smallestVarianceDigit
    for (var i = 0, ii = keys.length; i < ii; ++i) {
        var variance = digits[keys[i]].getVariance(testMap)
        if (typeof smallestVariance === 'undefined' || variance < smallestVariance) {
            smallestVariance = variance
            smallestVarianceDigit = keys[i]
        }
    }

    return smallestVarianceDigit
}

MyCollectionCardReader.prototype.getCard = function() {
    var cost = this.getCost()

    return {
        cost: cost
    }
}

module.exports = MyCollectionCardReader
