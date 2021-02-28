const userName = document.querySelector("#userName");
const userAge = document.querySelector("#userAge");
const totalScore = document.querySelector("#totalScore");
const body = document.querySelector("#body");

userName.innerHTML += JSON.parse(localStorage.getItem("userInfo")).userName;
userAge.innerHTML += JSON.parse(localStorage.getItem("userInfo")).userAge;;
totalScore.innerHTML += JSON.parse(localStorage.getItem("totalScore")).scoreNum;

const lv1HIT = document.querySelector("#lv1HIT");
const lv1MISS = document.querySelector("#lv1MISS");
const lv2HIT = document.querySelector("#lv2HIT");
const lv2MISS = document.querySelector("#lv2MISS");
const lv3HIT = document.querySelector("#lv3HIT");
const lv3MISS = document.querySelector("#lv3MISS");

lv1HIT.innerHTML += JSON.parse(localStorage.getItem("lv1Hit"));
lv1MISS.innerHTML += JSON.parse(localStorage.getItem("lv1Miss"));
lv2HIT.innerHTML += JSON.parse(localStorage.getItem("lv2Hit"));
lv2MISS.innerHTML += JSON.parse(localStorage.getItem("lv2Miss"));
lv3HIT.innerHTML += JSON.parse(localStorage.getItem("lv3Hit"));
lv3MISS.innerHTML += JSON.parse(localStorage.getItem("lv3Miss"));

// music
const music = document.querySelector("#music");
music.style.left = `${body.offsetWidth - 100}px`;
music.style.top = `${30}px`;
var audio = new Audio("../../Audio/Shallow .mp3");

audio.currentTime = JSON.parse(localStorage.getItem("Music"));
audio.play();
let flag = 1;
music.addEventListener("click", () => {
    // play music when it is paused
    if (flag) {
        music.style.backgroundImage = "url(../../Image/Pause.png)";
        audio.play();
        flag = 0;
    }
    // pause music
    else {
        audio.pause();
        music.style.backgroundImage = "url(../../Image/play.jpg)";
        flag = 1;
    }
});
