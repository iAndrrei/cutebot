let sonar = 0
basic.showIcon(IconNames.Ghost)
music.playMelody("C D E F G A B C5 ", 120)
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.lightLevel() < 10) {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 200, 200, 200)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 200, 200, 200)
    } else {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
    }
    basic.pause(1000)
})
