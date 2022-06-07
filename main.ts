let receptor_right = 0
let receptor_left = 0
let threshold = 700
pins.servoWritePin(AnalogPin.P15, 91)
basic.forever(function () {
    receptor_left = pins.analogReadPin(AnalogPin.P4)
    if (receptor_left > threshold) {
        pins.servoWritePin(AnalogPin.P15, 180)
    } else {
        pins.servoWritePin(AnalogPin.P15, 90)
    }
    receptor_right = pins.analogReadPin(AnalogPin.P3)
    serial.writeLine("" + (receptor_right))
    if (receptor_right > threshold) {
        pins.servoWritePin(AnalogPin.P15, 0)
    } else {
        pins.servoWritePin(AnalogPin.P15, 90)
    }
    if (threshold < 700) {
        pins.servoWritePin(AnalogPin.P15, 90)
    }
})
