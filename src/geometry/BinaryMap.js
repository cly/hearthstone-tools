var Point = require('./Point')

var BinaryMap = function(map, width, height) {
    this.map = map
    this.width = width
    this.height = height
    this.points = []

    // Compute center.
    var sumPoint = new Point(0, 0)
    for (var y = 0, yy = height; y < yy; ++y) {
        for (var x = 0, xx = width; x < xx; ++x) {
            var index = y * width + x
            if (map[index] === 1) {
                var point = new Point(x, y)
                this.points.push(point)
                sumPoint = sumPoint.add(point)
            }
        }
    }

    this.center = new Point(
        Math.round(sumPoint.x/this.points.length),
        Math.round(sumPoint.y/this.points.length)
    )

    // Re-center x,y by center.
    for (var i = 0, ii = this.points.length; i < ii; ++i) {
        this.points[i] = this.points[i].subtract(this.center)
    }
}

BinaryMap.prototype.getCenter = function() {
    return this.center
}

BinaryMap.prototype.getVariance = function(map) {
    if (!(map instanceof BinaryMap)) {
        throw new Error('`map` must be an instance of `BinaryMap`')
    }

    // Single pass traversal of both lists. If same number found, then increment counter.
    // Otherwise iterate on smallest of the two lists.
    var i = 0
    var j = 0
    var variance = 0

    while(true) {
        if (i < this.points.length && j < map.points.length) {
            if (this.points[i].equals(map.points[j])) {
                // No variance all good.
                i++
                j++
            } else if (this.points[i].isLessThan(map.points[j])) {
                variance += 1
                i++
            } else {
                variance += 1
                j++
            }
        } else if (i < this.points.length) {
            variance += 1
            i++
        } else if (j < map.points.length) {
            variance += 1
            j++
        } else {
            break;
        }
    }

    return variance
}

BinaryMap.prototype.toString = function() {
    return JSON.stringify(this.map, 2, 2)
}

BinaryMap.prototype.toPrettyString = function() {
    var regExp = new RegExp('.{1,' + this.width * 2 + '}', 'g')
    return JSON.stringify(this.map).match(regExp).join('\n')
}

module.exports = BinaryMap
