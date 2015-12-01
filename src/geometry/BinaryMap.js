var BinaryMap = function(map, width, height) {
    this.map = map
    this.width = width
    this.height = height
    this.prune()
}

BinaryMap.prototype.prune = function() {
    // Remove rows and columns that are all 0s.
}

BinaryMap.prototype.getCenter = function() {
    // Return the average of all the 1s. Center is from top left corner.
}

BinaryMap.prototype.getStandardDeviation = function(map) {
    if (!(map instanceof BinaryMap)) {
        throw new Error('`map` must be an instance of `BinaryMap`')
    }

    // Take the difference of two maps by first finding the center.
    // Then from the center find the deviation of the two.
    // Least deviation is better.
}

module.exports = BinaryMap
