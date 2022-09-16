console.log("hello");
var music = document.getElementById("music");
// PLAY
var play = document.getElementById("play");
play.addEventListener("click", function() {
    music.loop= true;
    console.log("Play");
    music.play();
});

// PAUSE
var pause = document.getElementById("pause");
pause.addEventListener("click", function() {
    music.pause();
    console.log("Paused!");
});

// RELOAD
var reload = document.getElementById("reload");
reload.addEventListener("click", function() {
    music.loop= true;
    music.load();
    console.log("Reload!");
    music.play();
});