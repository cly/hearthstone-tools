var Point = function(x, y) {
    this.x = x
    this.y = y
}

Point.prototype.toArray = function() {
    return [this.x, this.y]
}

Point.prototype.add = function(point) {
    if (!(point instanceof Point)) {
        throw new Error('`point` must be an instance of `Point`')
    }

    return new Point(this.x + point.x, this.y + point.y)
}

module.exports = Point
