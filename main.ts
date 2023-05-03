let variable_2 = 0
let variable_1 = 0
input.onGesture(Gesture.LogoUp, function () {
    variable_2 = 8
    basic.showNumber(variable_2)
    variable_1 = randint(0, 10)
    basic.showNumber(variable_1)
    basic.showNumber(variable_1 * variable_2)
})
input.onButtonPressed(Button.A, function () {
    variable_2 = 2
    basic.showNumber(variable_2)
    variable_1 = randint(0, 10)
    basic.showNumber(variable_1)
    basic.showNumber(variable_1 * variable_2)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    variable_2 = 5
    basic.showNumber(variable_2)
    variable_1 = randint(0, 10)
    basic.showNumber(variable_1)
    basic.showNumber(variable_1 * variable_2)
})
input.onGesture(Gesture.TiltRight, function () {
    variable_2 = 10
    basic.showNumber(variable_2)
    variable_1 = randint(0, 10)
    basic.showNumber(variable_1)
    basic.showNumber(variable_1 * variable_2)
})
input.onGesture(Gesture.Shake, function () {
    variable_2 = 6
    basic.showNumber(variable_2)
    variable_1 = randint(0, 10)
    basic.showNumber(variable_1)
    basic.showNumber(variable_1 * variable_2)
})
input.onGesture(Gesture.TiltLeft, function () {
    variable_2 = 9
    basic.showNumber(variable_2)
    variable_1 = randint(0, 10)
    basic.showNumber(variable_1)
    basic.showNumber(variable_1 * variable_2)
})
input.onButtonPressed(Button.B, function () {
    variable_2 = 3
    basic.showNumber(variable_2)
    variable_1 = randint(0, 10)
    basic.showNumber(variable_1)
    basic.showNumber(variable_1 * variable_2)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    variable_2 = 4
    basic.showNumber(variable_2)
    variable_1 = randint(0, 10)
    basic.showNumber(variable_1)
    basic.showNumber(variable_1 * variable_2)
})
input.onGesture(Gesture.LogoDown, function () {
    variable_2 = 7
    basic.showNumber(variable_2)
    variable_1 = randint(0, 10)
    basic.showNumber(variable_1)
    basic.showNumber(variable_1 * variable_2)
})
