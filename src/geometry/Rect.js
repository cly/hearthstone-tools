var Point = require('./Point')
var Polygon = require('./Polygon')

var Rect = function(x, y, width, height) {
    Polygon.call(this)
    this.x = x
    this.y = y
    this.width = width
    this.height = height
}
Rect.prototype = Object.create(Polygon.prototype)
Rect.prototype.constructor = Rect

Rect.prototype.getTopLeft = function(offset) {
    return new Point(this.x, this.y)
}

Rect.prototype.getBottomRight = function() {
    return new Point(this.x + this.width - 1, this.y + this.height - 1)
}

Rect.prototype.getCenter = function() {
    return new Point(this.x + (this.width - 1) / 2, this.y + (this.height - 1) / 2)
}

module.exports = Rect
