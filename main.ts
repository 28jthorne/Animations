controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("Jumping Jacks", 1000, false)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Jumpingjacks`,
    200,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("Walking", 1000, false)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Walking`,
    200,
    false
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`stickfigure`, SpriteKind.Player)
