var gameWindow = require('../gameWindow')

var MyCollectionCardReader = function(rect) {
    this.rect =
}

MyCollectionCardReader.prototype.getGeometry = function() {
    if (gameWindow.hasResolution(1024, 768)) {
        return new Rect(447, 599, 257, 102)
    } else {
        throw new Error('`gameWindow` resolution is not supported.')
    }
}

module.exports = MyCollectionCardReader
