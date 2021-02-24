//Script file for website

var sound = document.getElementById("medley");

function play() { //This plays the music that is linked in the HTML document
    sound.play();
}

function pause() { //This pauses the music that is linked in the HTML document
    sound.pause();
}

function activateSound() {
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
    }
}