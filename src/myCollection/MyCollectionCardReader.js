var robot = require('robotjs')
var tinycolor = require('tinycolor2')
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
                return new Rect(558, 409, 153, 228)
            }
        }
        throw new Error('`row` must be between 0 and 1 inclusive. `column` must be between 0 and 3 inclusive')
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }
}

MyCollectionCardReader.prototype.getCost = function() {
    var polygon = this.getPolygon()
    var costPolygon = new Rect(polygon.x, polygon.y, 27, 23)
    var points = costPolygon.getPoints()

    var numBright = points
    .map((point) => point.add(gameWindow.getOffset()))
    .map((screenPoint) => robot.getPixelColor(screenPoint.x, screenPoint.y))
    .map((color) => tinycolor('#' + color).getLuminance())
    .reduce((prev, curr) => prev + (curr >= 1 ? 1 : 0), 0)

    console.log(numBright)
    // .forEach((point) => robot.moveMouse(point.x, point.y))

    // console.log(points.length)
    // console.log(colors[0])
}

MyCollectionCardReader.prototype.getCard = function() {
    // var polygon = this.getPolygon()
    var cost = this.getCost()



    // 77, 212
    // top 286
    // bottom 292
    //

    // console.log(11111)
    // console.log(polygon)
}

module.exports = MyCollectionCardReader
