const playBtn = document.querySelector("#playBtn");
let name = document.querySelector("#nameText");
let age = document.querySelector("#ageText");

const music = document.querySelector("#music");
const body = document.querySelector("#body");
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

const playGame = () => {
    const userData = {
        userName: name.value,
        userAge: age.value
    }
    
    if (name.value != `` && !isNaN(age.value)) {
        localStorage.setItem("userInfo", JSON.stringify(userData));
        localStorage.setItem("Music", audio.currentTime);
        window.location.href = "../../HTML/Level1/HtmlPage.html";
    }
    else {
        alert(`input valiable values`);
        document.querySelector("#nameText").value = '';
        document.querySelector("#ageText").value = '';
    }
}

playBtn.addEventListener("click", playGame);
