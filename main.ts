scene.setBackgroundColor(15)
tiles.setCurrentTilemap(tilemap`beggining`)
let spy = sprites.create(assets.image`spy`, SpriteKind.Player)
let spy_buddy = sprites.create(assets.image`spy buddy`, SpriteKind.Player)
tiles.placeOnRandomTile(spy, sprites.castle.tilePath5)
tiles.placeOnRandomTile(spy_buddy, sprites.castle.tilePath5)
controller.moveSprite(spy, 100, 100)
tiles.placeOnTile(spy, tiles.getTileLocation(6, 1))
spy.setStayInScreen(true)
controller.moveSprite(spy_buddy, 100, 100)
tiles.placeOnTile(spy_buddy, tiles.getTileLocation(7, 1))
spy_buddy.setStayInScreen(true)
let camera_cruz = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . 1 . 1 1 . 1 . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . 1 1 1 1 1 . . 1 1 1 1 1 . . 
    . . 1 1 1 1 1 . . 1 1 1 1 1 . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . 1 . 1 1 . 1 . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(camera_cruz)
game.onUpdate(function () {
    camera_cruz.setPosition((spy.x + spy_buddy.x) / 2, (spy.y + spy_buddy.y) / 2)
})
