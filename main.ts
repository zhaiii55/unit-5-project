namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const grnadmacloseup = SpriteKind.create()
}
let rock: Sprite = null
let grandmacloseup: Sprite = null
let pressA: Sprite = null
scene.setBackgroundColor(15)
tiles.setCurrentTilemap(tilemap`beggining`)
let evilbees = sprites.create(assets.image`enemy 1`, SpriteKind.Enemy)
let spy = sprites.create(assets.image`spy`, SpriteKind.Player)
let spy_buddy = sprites.create(assets.image`spy buddy`, SpriteKind.Player)
tiles.placeOnRandomTile(spy, sprites.castle.tilePath5)
tiles.placeOnRandomTile(spy_buddy, sprites.castle.tilePath5)
controller.moveSprite(spy, 100, 100)
tiles.placeOnTile(spy, tiles.getTileLocation(0, 1))
spy.setStayInScreen(true)
controller.moveSprite(spy_buddy, 100, 100)
tiles.placeOnTile(spy_buddy, tiles.getTileLocation(1, 1))
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
tiles.placeOnTile(grandma, tiles.getTileLocation(3, 1))
animation.runImageAnimation(
grandma,
assets.animation`grandma cries`,
500,
true
)
evilbees = sprites.create(assets.image`enemy 1`, SpriteKind.Enemy)
animation.runImageAnimation(
evilbees,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
game.onUpdate(function () {
    camera_cruz.setPosition((spy.x + spy_buddy.x) / 2, (spy.y + spy_buddy.y) / 2)
})
forever(function () {
    if (spy.overlapsWith(grandma) || spy.overlapsWith(grandma)) {
        pressA = sprites.create(assets.image`pressA`, SpriteKind.Player)
        pressA.setPosition(75, 100)
    } else {
        sprites.destroy(pressA, effects.spray, 500)
    }
    if (controller.B.isPressed() && spy.overlapsWith(grandma) || controller.B.isPressed() && spy_buddy.overlapsWith(grandma)) {
        grandmacloseup = sprites.create(assets.image`Grandma close up 1`, SpriteKind.grnadmacloseup)
        grandmacloseup.setPosition(50, 60)
        game.showLongText("My grandsin is missing!", DialogLayout.Bottom)
        game.showLongText("Help me find my grandson!", DialogLayout.Bottom)
        game.showLongText("Hes at the end of the maze...", DialogLayout.Bottom)
        game.showLongText("Please help me...", DialogLayout.Bottom)
        game.showLongText("Or else ill have to get a new one", DialogLayout.Bottom)
        sprites.destroy(grandmacloseup)
        sprites.destroy(pressA)
    } else if (controller.B.isPressed()) {
        pause(100)
        rock = sprites.createProjectileFromSprite(assets.image`rock`, spy, 30, 30)
        rock = sprites.createProjectileFromSprite(assets.image`rock`, spy_buddy, 30, 30)
    }
})
