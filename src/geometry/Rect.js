var Point = require('./Point')

var Rect = function(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
}

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
