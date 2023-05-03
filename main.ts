let variable_2 = 0
let variable_1 = 0
input.onButtonPressed(Button.A, function () {
    variable_2 = 2
    basic.showNumber(variable_2)
    variable_1 = randint(0, 10)
    basic.showNumber(variable_1)
    basic.showNumber(variable_1 * variable_2)
})
