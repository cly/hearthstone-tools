# hearthstone-tools
Export your cards, build your decks and more!

## Demo!
Image is kinda big, just want to show some progress here.
![Pager demo](hearthcostpager.gif)

## Pre-installation
Please follow the instructions at https://github.com/octalmage/robotjs to install the dependencies for `robotjs`.

## Installation
* `git clone https://github.com/cly/hearthstone-tools.git`
* `cd hearthstone-tools`
* TBD

## Setup
* Run Hearthstone
* Make sure graphics resolution is 1024x768 and quality is High.
    - This restriction will be relaxed in the future.
* Ensure the Hearthstone app is locked to the top left pixel of the screen.
    - A tool like Spectacle on Mac OS X will make this easy.
    - This restriction will be relaxed in the future.

## Support
* Only tested on Mac OS X El Capitan 10.11.1 with a MacBook Pro 15in.
    - Please let me know if it works/does not work on other platforms!

## Long-term vision
1. Start a web server while you play Hearthstone.
2. Render a web page with helpful tools as you play.

## Architecture
1. Web server talks to browser page on some websocket port.
2. Server also talks to screen, mouse and keyboard through robotjs.
2. As things are being automated, record actions and render in browser.

## TODOs
1. Setup a commandline REPL for instructions.
2. Create an exporter bin that will export cards.
3. Create a page flipper.
4. Import existing card info.
5. Create a script that imports card info bitmaps.
6. Create a local storage of imported bitmap and card infos.
7. Read screen pixels.
8. Compare screen pixels with card info.
9. Output as each event (card found, page flip) is accomplished.
