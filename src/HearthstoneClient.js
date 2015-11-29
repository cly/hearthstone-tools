var robot = require('robotjs')
var MyCollectionButton = require('./MyCollectionButton')
var GameWindow = require('./GameWindow')
var Rect = require('./Rect')

var gameWindow = new GameWindow(new Rect(1, 46, 1024, 768))
var myCollectionButton = new MyCollectionButton(gameWindow)

var VIEW = {
    MENU: 'MENU',
    MY_COLLECTION: 'MY_COLLECTION'
}


robot.setMouseDelay(2)
console.log(robot)

var HearthstoneClient = function() {
    this.currentView = VIEW.MENU
    this.offset = [1, 46]
}
HearthstoneClient.VIEW = VIEW

HearthstoneClient.prototype.go = function(view) {
    // Focus on the window first.
    robot.moveMouseSmooth(200, 34)
    robot.mouseClick()
    if (view === VIEW.MY_COLLECTION) {
        myCollectionButton.click()
        // robot.moveMouseSmooth(...myCollectionButton.getCenter().toArray())
        // robo// setTimeout(function() {
//     robot.moveMouseSmooth(x + 100, y)
//     robot.mouseClick();
// }, 10)
    }
}

module.exports = HearthstoneClient
