var Innervate = require('../cards/enUS/Innervate');

var CardDb = function() {
    this.data = [new Innervate()]
}

CardDb.prototype.get = function(name, locale) {
    locale = locale || 'enUS'
    // TODO: Fix
    return this.data[0]
}

module.exports = CardDb
