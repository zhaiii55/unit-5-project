namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
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
let grandma = sprites.create(assets.image`grandma`, SpriteKind.NPC)
tiles.placeOnTile(grandma, tiles.getTileLocation(5, 12))
animation.runImageAnimation(
grandma,
[img`
    . f f f 1 1 1 1 1 1 1 1 1 f f . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    . f 1 1 1 1 1 1 b b b b b 1 f . 
    . f 1 1 b d b b b d d d d 1 f f 
    f f 1 b d d d d d d d d d b 1 f 
    f 1 b d d d d d d d d d d b f f 
    f f b d d f f d d d f f d f f . 
    . f f d d d d d d d d d d f . . 
    . f 1 1 c 1 1 1 1 1 5 5 1 f f f 
    . f 1 1 c 5 1 1 1 5 5 5 1 d d f 
    . f d d c 5 5 5 5 5 5 5 f d e f 
    . f d d c 5 5 5 5 5 5 f f f e f 
    . f c 5 c 5 1 5 1 5 1 f . f e f 
    . f c c c 1 1 1 1 1 1 f . f e f 
    . f c c c 1 1 1 1 1 1 f . f e f 
    . f f f f d d f d d f f . f e f 
    `,img`
    . . . . f f f f f f f f f . . . 
    . f f f 1 1 1 1 1 1 1 1 1 f f . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    . f 1 1 1 1 1 1 b b b b b 1 f . 
    . f 1 1 b d b b b d d d d 1 f . 
    f f 1 b d d d d d d d d d b 1 . 
    f 1 b d d d d d d d d d d b f . 
    f f b d d f f d d d f f d f f . 
    f f f d 9 d d d d d d d 9 f f . 
    . f 1 1 c 5 1 1 1 5 5 5 1 d d f 
    . f d d c 5 5 5 5 5 5 5 f d e f 
    . f d d c 5 5 5 5 5 5 f f f e f 
    . f c 5 c 5 1 5 1 5 1 f . f e f 
    . f c c c 1 1 1 1 1 1 f . f e f 
    . f c c c 1 1 1 1 1 1 f . f e f 
    . f f f f d d f d d f f . f e f 
    `,img`
    . c . c f c f f f f f f f . . . 
    . c f c 1 c 1 1 1 1 1 1 1 f f . 
    . c 1 c 1 1 1 1 1 1 1 1 1 1 f . 
    . c 1 1 1 1 1 1 b b b b b 1 f . 
    . f 1 1 b d b b b d d d d 1 f . 
    f f 1 b d d d d d d d d d b 1 . 
    f 1 b d d d d d d d d d d b f . 
    f f b d d f f d d d f f d f f . 
    f f f d 9 d d d d d d d 9 f f . 
    . f 1 1 c 5 1 1 1 5 5 5 1 d d f 
    . f d d c 5 5 5 5 5 5 5 f d e f 
    . f d d c 5 5 5 5 5 5 f f f e f 
    . f c 5 c 5 1 5 1 5 1 f . f e f 
    . f c c c 1 1 1 1 1 1 f . f e f 
    . f c c c 1 1 1 1 1 1 f . f e f 
    . f f f f d d f d d f f . f e f 
    `,img`
    . c . c f c f f f f f f f . . . 
    . c f c 1 c 1 1 1 1 1 1 1 f f . 
    . c 1 c 1 c 1 1 1 1 1 1 1 1 f . 
    . c 1 c 1 1 1 1 b b b b b 1 f . 
    . c 1 1 b d b b b d d d d 1 f . 
    f f 1 b d d d d d d d d d b 1 . 
    f 1 b d d d d d d d d d d b f . 
    f f b d d f f d d d f f d f f . 
    f f f d 9 d d d d d d d 9 f f . 
    . f 1 1 c 5 1 1 1 5 5 5 1 d d f 
    . f d d c 5 5 5 5 5 5 5 f d e f 
    . f d d c 5 5 5 5 5 5 f f f e f 
    . f c 5 c 5 1 5 1 5 1 f . f e f 
    . f c c c 1 1 1 1 1 1 f . f e f 
    . f c c c 1 1 1 1 1 1 f . f e f 
    . f f f f d d f d d f f . f e f 
    `,img`
    . c . c . c . c . . . . . . . . 
    . c . c f c f f f f f f f . . . 
    . c f c 1 c 1 1 1 1 1 1 1 f f . 
    . c 1 c 1 c 1 1 1 1 1 1 1 1 f . 
    . c 1 c 1 1 1 1 b b b b b 1 f . 
    . c 1 1 b d b b b d d d d 1 f . 
    f f 1 b d d d d d d d d d b 1 . 
    f 1 b d d d d d d d d d d b f . 
    f f b d d f f d d d f f d f f . 
    f f f d 9 d d d d d d d 9 f f f 
    . f d d c 5 1 1 1 5 5 5 f d e f 
    . f d d c 5 5 5 5 5 5 f f f e f 
    . f c 5 c 5 5 5 5 5 1 f . f e f 
    . f c c c 5 1 5 1 5 1 f . f e f 
    . f c c c 1 1 1 1 1 1 f . f e f 
    . f f f f d d f d d f f . f e f 
    `],
500,
true
)
game.onUpdate(function () {
    camera_cruz.setPosition((spy.x + spy_buddy.x) / 2, (spy.y + spy_buddy.y) / 2)
})
