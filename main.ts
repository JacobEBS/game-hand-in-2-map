namespace SpriteKind {
    export const ground = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Table main character`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundImage(assets.image`myImage1`)
tiles.setTilemap(tilemap`Tilemaplol1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 161))
mySprite.ay = 300
