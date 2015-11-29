// TODO: This file should be small and will be small. Currently just testing stuff here.

var co = require('co')
var CardDb = require('./src/CardDb')
var HearthstoneClient = require('./src/HearthstoneClient')

var hearthstoneClient = new HearthstoneClient()
var cardDb = new CardDb()

var Innervate = cardDb.get('Innervate')

var delay = function(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            return resolve()
        }, ms)
    })
}


co(function* () {
    hearthstoneClient.go(HearthstoneClient.VIEW.MY_COLLECTION)
    yield delay(2000)
    hearthstoneClient.page()

    // console.log(Innervate)
    // var kk = yield Innervate.getImage()


}).then(function(value) {
    console.log('Done', value)
}).catch(function(error) {
    console.log('Error: ', error)
    console.log(error.stack)
})
