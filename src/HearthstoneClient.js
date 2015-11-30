var robot = require('robotjs')

var GameWindow = require('./GameWindow')
var MenuScreen = require('./menu/MenuScreen')
var MyCollectionScreen = require('./myCollection/MyCollectionScreen')
var Rect = require('./geometry/Rect')

var gameWindow = new GameWindow(new Rect(1, 46, 1024, 768))
var menuScreen = new MenuScreen(gameWindow)
var myCollectionScreen = new MyCollectionScreen(gameWindow)

var VIEW = {
    MENU: 'MENU',
    MY_COLLECTION: 'MY_COLLECTION'
}

robot.setMouseDelay(2)

var HearthstoneClient = function() {
    this.currentView = VIEW.MENU
    this.offset = [1, 46]
}
HearthstoneClient.VIEW = VIEW

HearthstoneClient.prototype.go = function * (view) {
    // Focus on the window first.
    robot.moveMouseSmooth(200, 34)
    robot.mouseClick()
    if (view === VIEW.MY_COLLECTION) {
        yield menuScreen.myCollectionButton.click()
    }
}

HearthstoneClient.prototype.page = function * () {
    yield myCollectionScreen.myCollectionNextPageButton.click()
    yield myCollectionScreen.myCollectionNextPageButton.click()
    yield myCollectionScreen.myCollectionPreviousPageButton.click()
}

module.exports = HearthstoneClient
