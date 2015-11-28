var path = require('path')
var getPixels = require('get-pixels')

var Innervate = function() {
    this.data = {
        "cardId": "Innervate",
        "name": "Innervate",
        "cardSet": "Basic",
        "type": "Spell",
        "faction": "Neutral",
        "rarity": "Free",
        "cost": 0,
        "text": "Gain 2 Mana Crystals this turn only.",
        "flavor": "Some druids still have flashbacks from strangers yelling \"Innervate me!!\" at them.",
        "artist": "Doug Alexander",
        "collectible": true,
        "playerClass": "Druid",
        "howToGet": "Unlocked at Level 1.",
        "howToGetGold": "Unlocked at Level 36.",
        "image": "./image.png",
        "imageGold": "./image.gold.gif",
        "locale": "enUS"
    }
}

Innervate.prototype.getImage = function() {
    return new Promise((resolve, reject) => {
        var url = path.join(__dirname, this.data.image)

        getPixels(url, function(err, pixels) {
            if (err) {
                return reject(err)
            } else {
                return resolve(pixels)
            }
        })
    })
}

module.exports = Innervate
