let _1 = 0
let _2 = 0
input.onButtonPressed(Button.A, function () {
    _1 = randint(1, 9)
    basic.showNumber(_1)
    basic.pause(100)
    basic.showIcon(IconNames.No)
    _2 = randint(1, 9)
    basic.showNumber(_2)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showNumber(Math.abs(randint(1, 9)))
})
