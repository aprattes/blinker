input.onButtonPressed(Button.A, function () {
    zustand = links
})
input.onButtonPressed(Button.AB, function () {
    zustand = 0
})
input.onButtonPressed(Button.B, function () {
    zustand = rechts
})
let rechts = 0
let zustand = 0
let links = 0
links = 2
zustand = 0
rechts = 1
basic.forever(function () {
    if (zustand == rechts) {
        basic.showArrow(ArrowNames.East)
    } else {
        if (zustand == links) {
            basic.showArrow(ArrowNames.West)
        } else {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
    }
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
