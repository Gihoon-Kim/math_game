const container1 = document.querySelector("#level1");
const container2 = document.querySelector("#level2");
const container3 = document.querySelector("#level3");


const addAdd = document.createElement("p");
addAdd.style.color = "white";
addAdd.style.fontSize = "1.1rem";
addAdd.innerHTML = "ADD (Example 8 + 1 = 9)";

const addSub = document.createElement("p");
addSub.style.color = "red";
addSub.style.fontSize = "1.1rem";
addSub.innerHTML = "SUB (Example 8 - 3 = 5)";

const addDiv = document.createElement("p");
addDiv.style.color = "white";
addDiv.style.fontSize = "1.1rem";
addDiv.innerHTML = "DIV (Example 8 / 2 = 4)";

const music = document.querySelector("#music");
const body1 = document.querySelector("#body1");
music.style.left = `${body1.offsetWidth - 100}px`;
music.style.top = `${30}px`;

var audio = new Audio("../../Audio/Shallow .mp3");
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

const start = document.querySelector("#start");
start.addEventListener("click", () => {
    var musicTime = audio.currentTime;
    localStorage.setItem("Music", musicTime);
    window.location.href = "../SecondPage/HtmlPage.html";
})
container1.appendChild(addAdd);
container2.appendChild(addSub);
container3.appendChild(addDiv);

const restoreContainer = document.querySelector("#restoreContainer");
const restoreBtn = document.querySelector("#restoreBtn");

restoreContainer.style.top = `${body1.offsetHeight - 100}px`;
restoreBtn.addEventListener("click", () => {
    if (JSON.parse(localStorage.getItem("level") == 1))
        window.location.href = "../Level1/HtmlPage.html";
    else if (JSON.parse(localStorage.getItem("level") == 2))
        window.location.href = "../Level2/HtmlPage.html";
    else if (JSON.parse(localStorage.getItem("level") == 3))
        window.location.href = "../Level3/HtmlPage.html";
});