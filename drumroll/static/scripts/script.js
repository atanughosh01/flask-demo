// Function for playing specific audio on specific button stimulation
function makeSound(key) {

    switch (key) {

        case "w":
            var audioW = new Audio("./static/scripts/sounds/tom-1.mp3");
            audioW.play();
            break;

        case "a":
            var audioA = new Audio("./static/scripts/sounds/tom-2.mp3");
            audioA.play();
            break;

        case "s":
            var audioS = new Audio("./static/scripts/sounds/tom-3.mp3");
            audioS.play();
            break;

        case "d":
            var audioD = new Audio("./static/scripts/sounds/tom-4.mp3");
            audioD.play();
            break;

        case "j":
            var audioJ = new Audio("./static/scripts/sounds/snare.mp3");
            audioJ.play();
            break;

        case "k":
            var audioK = new Audio("./static/scripts/sounds/crash.mp3");
            audioK.play();
            break;

        case "l":
            var audioL = new Audio("./static/scripts/sounds/kick-bass.mp3");
            audioL.play();
            break;

        default:
            console.log(key);
            break;
    }
}


// Function for animating buttons while clicking them / pressing keys
function buttonAnimation(currentKey) {
    var activeBtn = document.querySelector("." + currentKey);

    activeBtn.style.color = "#ccc";
    activeBtn.style.width = "10.5rem";
    activeBtn.classList.add("pressed");

    setTimeout(() => {
        activeBtn.style.color = "#da0463";
        activeBtn.style.width = "10rem";
        activeBtn.classList.remove("pressed");
    }, 100);
}


// Function for audio playing when on-screen button is pressed
var buttonList = document.querySelectorAll(".drum");

for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


// Function for audio playing audio when specific key is pressed on keyboard
document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    makeSound(keyName);
    buttonAnimation(keyName);
});
