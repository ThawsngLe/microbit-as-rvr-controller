images.icon_image(IconNames.YES).scroll_image(1, 200)
images.create_image("""
    # # . # #
        # . . . #
        . . # . .
        # . . . #
        # # . # #
""").show_image(0)

def on_forever():
    if input.button_is_pressed(Button.A):
        images.create_image("""
            . . # . .
                        . # # . .
                        # # # . .
                        . # # . .
                        . . # . .
        """).show_image(0)
        while input.button_is_pressed(Button.A):
            if input.button_is_pressed(Button.B):
                images.create_image("""
                    . . # . .
                                        . # # # .
                                        # # # # #
                                        . . . . .
                                        . . . . .
                """).show_image(0)
                while input.button_is_pressed(Button.AB):
                    sphero.set_raw_motors(sphero.RawMotorModes.FORWARD,
                        65,
                        sphero.RawMotorModes.FORWARD,
                        65)
            sphero.set_raw_motors(sphero.RawMotorModes.BACKWARD,
                50,
                sphero.RawMotorModes.FORWARD,
                50)
        images.create_image("""
            # # . # #
                        # . . . #
                        . . # . .
                        # . . . #
                        # # . # #
        """).show_image(0)
    elif input.button_is_pressed(Button.B):
        images.create_image("""
            . . # . .
                        . . # # .
                        . . # # #
                        . . # # .
                        . . # . .
        """).show_image(0)
        while input.button_is_pressed(Button.B):
            if input.button_is_pressed(Button.A):
                images.create_image("""
                    . . # . .
                                        . # # # .
                                        # # # # #
                                        . . . . .
                                        . . . . .
                """).show_image(0)
                while input.button_is_pressed(Button.AB):
                    sphero.set_raw_motors(sphero.RawMotorModes.FORWARD,
                        65,
                        sphero.RawMotorModes.FORWARD,
                        65)
            sphero.set_raw_motors(sphero.RawMotorModes.FORWARD,
                50,
                sphero.RawMotorModes.BACKWARD,
                50)
        images.create_image("""
            # # . # #
                        # . . . #
                        . . # . .
                        # . . . #
                        # # . # #
        """).show_image(0)
basic.forever(on_forever)

def on_forever2():
    if input.pin_is_pressed(TouchPin.P1):
        images.create_image("""
            . . . . .
                        . . . . .
                        # # # # #
                        . # # # .
                        . . # . .
        """).show_image(0)
        while input.pin_is_pressed(TouchPin.P1):
            sphero.set_raw_motors(sphero.RawMotorModes.BACKWARD,
                65,
                sphero.RawMotorModes.BACKWARD,
                65)
        images.create_image("""
            # # . # #
                        # . . . #
                        . . # . .
                        # . . . #
                        # # . # #
        """).show_image(0)
basic.forever(on_forever2)
