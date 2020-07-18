radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Duck)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Happy)
    basic.showString("haiiiii!")
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("happy duck")
})
radio.setGroup(23)
