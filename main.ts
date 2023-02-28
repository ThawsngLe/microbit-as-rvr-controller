images.iconImage(IconNames.Yes).scrollImage(1, 200)
images.createImage(`
    # # . # #
    # . . . #
    . . # . .
    # . . . #
    # # . # #
    `).showImage(0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        control.waitMicros(1000)
        if (input.buttonIsPressed(Button.A)) {
            images.createImage(`
                . . # . .
                . # # . .
                # # # . .
                . # # . .
                . . # . .
                `).showImage(0)
            while (input.buttonIsPressed(Button.A)) {
                control.waitMicros(1000)
                if (input.buttonIsPressed(Button.B)) {
                    images.createImage(`
                        . . # . .
                        . # # # .
                        # # # # #
                        . . . . .
                        . . . . .
                        `).showImage(0)
                    while (input.buttonIsPressed(Button.AB)) {
                        sphero.setRawMotors(
                        sphero.RawMotorModes.forward,
                        75,
                        sphero.RawMotorModes.forward,
                        75
                        )
                    }
                }
                sphero.setRawMotors(
                sphero.RawMotorModes.backward,
                75,
                sphero.RawMotorModes.forward,
                75
                )
            }
            images.createImage(`
                # # . # #
                # . . . #
                . . # . .
                # . . . #
                # # . # #
                `).showImage(0)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        control.waitMicros(1000)
        if (input.buttonIsPressed(Button.B)) {
            images.createImage(`
                . . # . .
                . . # # .
                . . # # #
                . . # # .
                . . # . .
                `).showImage(0)
            while (input.buttonIsPressed(Button.B)) {
                control.waitMicros(1000)
                if (input.buttonIsPressed(Button.A)) {
                    images.createImage(`
                        . . # . .
                        . # # # .
                        # # # # #
                        . . . . .
                        . . . . .
                        `).showImage(0)
                    while (input.buttonIsPressed(Button.AB)) {
                        sphero.setRawMotors(
                        sphero.RawMotorModes.forward,
                        75,
                        sphero.RawMotorModes.forward,
                        75
                        )
                    }
                }
                sphero.setRawMotors(
                sphero.RawMotorModes.forward,
                75,
                sphero.RawMotorModes.backward,
                75
                )
            }
            images.createImage(`
                # # . # #
                # . . . #
                . . # . .
                # . . . #
                # # . # #
                `).showImage(0)
        }
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        images.createImage(`
            . . . . .
            . . . . .
            # # # # #
            . # # # .
            . . # . .
            `).showImage(0)
        while (input.pinIsPressed(TouchPin.P1)) {
            sphero.setRawMotors(
            sphero.RawMotorModes.backward,
            75,
            sphero.RawMotorModes.backward,
            75
            )
        }
        images.createImage(`
            # # . # #
            # . . . #
            . . # . .
            # . . . #
            # # . # #
            `).showImage(0)
    }
})
