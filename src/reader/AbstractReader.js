var gameWindow = require('../gameWindow')

var AbstractReader = function() {}

AbstractReader.prototype.getCenter = function() {
    return (this.getPolygon().getCenter()).add(gameWindow.getOffset())
}

AbstractReader.prototype.getTopLeft = function() {
    return (this.getPolygon().getTopLeft()).add(gameWindow.getOffset())
}

AbstractReader.prototype.getBottomRight = function() {
    return (this.getPolygon().getBottomRight()).add(gameWindow.getOffset())
}

module.exports = AbstractReader
