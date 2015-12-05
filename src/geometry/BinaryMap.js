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

    // Find the smallest offset starting from test center.
    var smallestVariance
    var smallestVarianceOffset
    var testCenter = new Point(0, 0)

    while(true) {
        for (var i = -1, ii = 1; i <= ii; ++i) {
            for (var j = -1, jj = 1; j <= jj; ++j) {
                var offset = testCenter.add(new Point(i, j))
                var variance = this.getVarianceWithOffset(map, offset)

                if ((typeof smallestVariance === 'undefined') || (variance < smallestVariance)) {
                    smallestVariance = variance
                    smallestVarianceOffset = offset
                }
            }
        }

        if (!smallestVarianceOffset.equals(testCenter)) {
            testCenter = smallestVarianceOffset
        } else {
            return smallestVariance/this.points.length
        }
    }
}

BinaryMap.prototype.getVarianceWithOffset = function(map, offset) {
    if (!(map instanceof BinaryMap)) {
        throw new Error('`map` must be an instance of `BinaryMap`')
    }

    // Hash points to a map. Iterate over map to find variance.
    var lookup = {}
    var variance = 0
    for (var i = 0, ii = this.points.length; i < ii; ++i) {
        var point = this.points[i]
        var key = point.toString()
        lookup[key] = 1
    }

    for (var i = 0, ii = map.points.length; i < ii; ++i) {
        var point = map.points[i]
        point = point.add(offset)
        var key = point.toString()
        if (lookup[key] === 1) {
            lookup[key] = 0
        } else {
            lookup[key] = 2
        }
    }

    var allKeys = Object.keys(lookup)

    for (var i = 0, ii = allKeys.length; i < ii; ++i) {
        var key = allKeys[i]
        if (lookup[key] !== 0) {
            variance += 1
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
