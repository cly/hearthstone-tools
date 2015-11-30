var Point = require('./geometry/Point')
var Rect = require('./geometry/Rect')

var GameWindow = function(rect) {
    if (!(rect instanceof Rect)) {
        throw new Error('`rect` must be an instance of `Rect`.')
    }

    this.rect = rect
}

GameWindow.prototype.hasResolution = function(width, height) {
    return this.rect.width === width && this.rect.height === height
}

GameWindow.prototype.getOffset = function() {
    // The offset is off by 1 because the first pixel is at [1, 1] so a rectangle
    // starting at [1, 1] requires no offset if the screen is at [1, 1].
    return new Point(this.rect.x - 1, this.rect.y - 1)
}

module.exports = GameWindow
