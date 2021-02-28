const infoBox = document.querySelector("#infoBox");
const body = document.querySelector("#body");

// ScoreBox position
infoBox.style.left = `${body.offsetWidth - (infoBox.offsetWidth + 80)}px`;
infoBox.style.top = `${body.offsetHeight - infoBox.offsetHeight}px`;

const movingArea = document.querySelector("#movingArea");
const h1Size = document.querySelector("#h1");
const question = document.querySelector("#question");

// moving area
movingArea.style.height = `${body.offsetHeight - infoBox.offsetHeight - h1Size.offsetHeight}px`;
movingArea.style.width = `${body.offsetWidth}px`;

// creating question

let qNum1 = Math.floor(Math.random() * 25) + 1;
let qNum2 = Math.floor(Math.random() * 9) + 1;

const createQuestion = (qNum1, qNum2) => {
    question.innerHTML = `Q: ${qNum1} + ${qNum2}`;
}

// music
const music = document.querySelector("#music");
music.style.left = `${body.offsetWidth - 100}px`;
music.style.top = `${30}px`;

var audio = new Audio("../../Audio/Shallow .mp3");

audio.currentTime = JSON.parse(localStorage.getItem("Music"));
audio.play();

let flag = 0;
music.addEventListener("click", () => {
    console.log("Btn Click");

    // play music
    if (flag) {
        music.style.backgroundImage = "url(../../Image/Pause.png)";
        audio.play();
        flag = 0;
    }
    // pause music
    else {
        music.style.backgroundImage = "url(../../Image/play.jpg)";
        audio.pause();
        flag = 1;
    }

});

const numberDivs = [
    document.querySelector("#num1"),
    document.querySelector("#num2"),
    document.querySelector("#num3"),
    document.querySelector("#num4"),
    document.querySelector("#num5"),
    document.querySelector("#num6"),
    document.querySelector("#num7"),
    document.querySelector("#num8"),
    document.querySelector("#num9")
]
const numbersValues = [
    document.querySelector("#num1Value"),
    document.querySelector("#num2Value"),
    document.querySelector("#num3Value"),
    document.querySelector("#num4Value"),
    document.querySelector("#num5Value"),
    document.querySelector("#num6Value"),
    document.querySelector("#num7Value"),
    document.querySelector("#num8Value"),
    document.querySelector("#num9Value")
]
// change position
const moveElement = () => {
    for (var i = 0; i < numberDivs.length; i++) {
        const newHeight = (Math.random() * (body.offsetHeight - 170));
        const newWidth = (Math.random() * (body.offsetWidth - 100));
        numberDivs[i].style.top = `${newHeight}px`;
        numberDivs[i].style.left = `${newWidth}px`;
    }
}

// create random questions
const createNumbers = (qNum1, qNum2) => {
    const wrongNumbers = [];

    while (true) {
        const val1 = Math.floor(Math.random() * 26);
        const val2 = Math.floor(Math.random() * 10);

        if ((val1 + val2) == (qNum1 + qNum2))
            continue;
        else {
            for (var i = 0; i < wrongNumbers.length; i++) {
                if ((val1 + val2) == wrongNumbers[i])
                    continue;
            }
            wrongNumbers.push(val1 + val2);
        }
        if (wrongNumbers.length == 8)
            break;
    }

    numbersValues[0].innerHTML = `${qNum1 + qNum2}`;
    numberDivs[0].appendChild(numbersValues[0]);
    for (var i = 1; i <= wrongNumbers.length; i++) {
        numbersValues[i].innerHTML = `${wrongNumbers[i - 1]}`;
        numberDivs[i].appendChild(numbersValues[i]);
    }
}

window.addEventListener("load", createQuestion(qNum1, qNum2));
window.addEventListener("load", createNumbers(qNum1, qNum2));
setInterval(moveElement, 2000);


const score = document.querySelector("#score");
const hits = document.querySelector("#hits");
const miss = document.querySelector("#miss");

// Correct Answer

const scoreValue = {
    scoreNum: 0,
    hitsNum: 0,
    missNum: 0
}

const saveFile = JSON.parse(localStorage.getItem("saved"));
if (saveFile) {
    scoreValue.scoreNum = `${JSON.parse(localStorage.getItem("totalScore"))}`;
    scoreValue.hitsNum = `${JSON.parse(localStorage.getItem("lv1Hit"))}`;
    scoreValue.missNum = `${JSON.parse(localStorage.getItem("lv1Miss"))}`;
}
score.innerHTML = `${scoreValue.scoreNum}`;
hits.innerHTML = `${scoreValue.hitsNum}`;
miss.innerHTML = `${scoreValue.missNum}`;

const correct = () => {
    scoreValue.scoreNum += 10;
    scoreValue.hitsNum++;
    score.innerHTML = `${scoreValue.scoreNum}`;
    hits.innerHTML = `${scoreValue.hitsNum}`;

    let qNum1 = Math.floor(Math.random() * 26);
    let qNum2 = Math.floor(Math.random() * 10);
    createQuestion(qNum1, qNum2);
    createNumbers(qNum1, qNum2);
}

// Wrong Answer
const wrong = () => {
    if (scoreValue.scoreNum > 0)
        scoreValue.scoreNum -= 10;
    scoreValue.missNum++;
    if (scoreValue.missNum == 6) {
        alert(`Game Over`);
        localStorage.setItem("totalScore", JSON.stringify(scoreValue.scoreNum));
        localStorage.setItem("lv1Hit", JSON.stringify(scoreValue.hitsNum));
        localStorage.setItem("lv1Miss", JSON.stringify(scoreValue.missNum));
        localStorage.setItem("Music", audio.currentTime);

        window.location.href = "../../HTML/Result Page/HtmlPage.html";
    }
    score.innerHTML = `${scoreValue.scoreNum}`;
    miss.innerHTML = `${scoreValue.missNum}`;

    let qNum1 = Math.floor(Math.random() * 26);
    let qNum2 = Math.floor(Math.random() * 10);
    createQuestion(qNum1, qNum2);
    createNumbers(qNum1, qNum2);
}

numbersValues[0].addEventListener("click", correct);
for (var i = 1; i < numberDivs.length; i++)
    numberDivs[i].addEventListener("click", wrong);

//set Time
const time = document.querySelector("#time");
let timeNum;
if (saveFile)
    timeNum = `${JSON.parse(localStorage.getItem("time"))}`;
else
    timeNum = 0;
const increaseTime = () => {
    timeNum++;
    time.innerHTML = `${timeNum}`;

    // next game
    if (timeNum == 90) {
        alert(`Time Over`);
        localStorage.setItem("totalScore", JSON.stringify(scoreValue.scoreNum));
        localStorage.setItem("lv1Hit", JSON.stringify(scoreValue.hitsNum));
        localStorage.setItem("lv1Miss", JSON.stringify(scoreValue.missNum));
        localStorage.setItem("Music", audio.currentTime);
        localStorage.setItem("time", 0);
        localStorage.setItem("saved", 0);
        window.location.href = "../../HTML/Level2/HtmlPage.html";
    }
}
setInterval(increaseTime, 1000);

// mouse position

function showCoords(event) {
    document.querySelector("#questionContainer").style.left = `${event.clientX}px`;
    document.querySelector("#questionContainer").style.top = `${event.clientY}px`;
}

// Save

const saveContainer = document.querySelector("#saveContainer");
const saveBtn = document.querySelector("#saveBtn");
saveContainer.style.top = `${body.offsetHeight - saveContainer.offsetHeight}px`;
saveBtn.addEventListener("click", () => {
    let level = 1;
    let isSaved = 1;
    console.log("saveBtn");
    localStorage.setItem("totalScore", JSON.stringify(scoreValue.scoreNum));
    localStorage.setItem("lv1Hit", JSON.stringify(scoreValue.hitsNum));
    localStorage.setItem("lv1Miss", JSON.stringify(scoreValue.missNum));
    localStorage.setItem("level", JSON.stringify(level));
    localStorage.setItem("time", JSON.stringify(timeNum));
    localStorage.setItem("saved", JSON.stringify(isSaved));
    window.location.href = "../../HTML/FirstPage/HtmlPage.html";
});