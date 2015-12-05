var Point = function(x, y) {
    this.x = x
    this.y = y
}

Point.prototype.toArray = function() {
    return [this.x, this.y]
}

Point.prototype.isPoint = function(point) {
    if (!(point instanceof Point)) {
        throw new Error('`point` must be an instance of `Point`. Got ' + point + ' instead.')
    }
}

Point.prototype.add = function(point) {
    this.isPoint(point)
    return new Point(this.x + point.x, this.y + point.y)
}

Point.prototype.subtract = function(point) {
    this.isPoint(point)
    return new Point(this.x - point.x, this.y - point.y)
}

Point.prototype.toString = function() {
    return '' + this.x + ',' + this.y
}

Point.prototype.equals = function(point) {
    this.isPoint(point)
    return this.x === point.x && this.y === point.y
}

Point.prototype.isLessThan = function(point) {
    this.isPoint(point)
    return (this.y < point.y) || (this.y === point.y && this.x < point.x)
}

Point.prototype.isOrigin = function() {
    return this.x === 0 && this.y === 0
}

module.exports = Point
