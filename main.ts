let celcius = 0
let fahrenheit = 0
basic.forever(function () {
    celcius = input.temperature()
    fahrenheit = celcius * 1.8 + 32
    if (fahrenheit >= -22 && fahrenheit <= 14) {
        basic.showString("Stay at home, there is heavy snow")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (fahrenheit >= 15 && fahrenheit <= 23) {
        basic.showString("Go for your skis and have fun!")
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else if (fahrenheit >= 24 && fahrenheit <= 32) {
        basic.showString("Warning! You can only ski in the highest parts ")
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else {
        basic.showString("Sorry, it is not ski season")
        basic.showLeds(`
            . . . # .
            # . # . .
            . . # . .
            # . # . .
            . . . # .
            `)
    }
})
