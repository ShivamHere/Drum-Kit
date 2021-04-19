var d = document.querySelectorAll("button.drum");
for(var i =0; i<d.length; i++)  d[i].addEventListener("click", function(){
    var buttonInnerHtml = this.innerHTML;
    switch(buttonInnerHtml){
        case "w": new Audio('sounds/crash.mp3').play();break;
        case "a": new Audio('sounds/kick-bass.mp3').play();break;
        case "s": new Audio('sounds/snare.mp3').play();break;
        case "d": new Audio('sounds/tom-1.mp3').play();break;
        case "j": new Audio('sounds/tom-2.mp3').play();break;
        case "k": new Audio('sounds/tom-3.mp3').play();break;
        case "l": new Audio('sounds/tom-4.mp3').play();break;
    }
});
document.addEventListener("keydown", function(logKey){
    console.log(logKey);
    switch(logKey.key){
        case "W":
        case "w": new Audio('sounds/crash.mp3').play();break;
        case "A":
        case "a": new Audio('sounds/kick-bass.mp3').play();break;
        case "S":
        case "s": new Audio('sounds/snare.mp3').play();break;
        case "D":
        case "d": new Audio('sounds/tom-1.mp3').play();break;
        case "J":
        case "j": new Audio('sounds/tom-2.mp3').play();break;
        case "K":
        case "k": new Audio('sounds/tom-3.mp3').play();break;
        case "L":
        case "l": new Audio('sounds/tom-4.mp3').play();break;
    }
});
