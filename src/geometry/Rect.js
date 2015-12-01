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

Rect.prototype.getTopLeft = function() {
    return new Point(this.x, this.y)
}

Rect.prototype.getTopRight = function() {
    return new Point(this.x + this.width - 1, this.y)
}

Rect.prototype.getBottomRight = function() {
    return new Point(this.x + this.width - 1, this.y + this.height - 1)
}

Rect.prototype.getBottomLeft = function() {
    return new Point(this.x, this.y + this.height - 1)
}

Rect.prototype.getCenter = function() {
    return new Point(this.x + (this.width - 1) / 2, this.y + (this.height - 1) / 2)
}

Rect.prototype.getVertices = function() {
    return [
        this.getTopLeft(),
        this.getTopRight(),
        this.getBottomRight(),
        this.getBottomLeft()
    ]
}

Rect.prototype.getPoints = function() {
    var points = []

    for (var i = this.x, ii = this.x + this.width; i < ii; ++i) {
        for (var j = this.y, jj = this.y + this.height; j < jj; ++j) {
            points.push(new Point(i, j))
        }
    }

    return points;
}

module.exports = Rect
