input.onSound(DetectedSound.Loud, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 500), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B A G F E D C ", 500), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.pause(1000)
    basic.showNumber(11)
    basic.pause(1000)
    basic.showIcon(IconNames.No)
})
