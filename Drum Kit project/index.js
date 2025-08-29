
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {


        this.style.color = "green";

        var buttoninnerHTML = this.innerHTML;
        clickFun(buttoninnerHTML);

    })
}


document.addEventListener("keydown", function (event) {
    clickFun(event.key);
}
)


function clickFun(dkey) {
    switch (dkey) {
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case "a":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;


        case "s":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;

        case "d":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "k":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;

        default: console.log(buttoninnerHTML);
            break;
    }
}

function addAnimation(){
    querySelector()
}


