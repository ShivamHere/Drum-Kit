function buttonAnimation(currentKey){
    document.querySelector('.'+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector('.'+currentKey).classList.remove("pressed");
    }, 100);
}
function makeSound(buttonInnerHtml){
    switch(buttonInnerHtml){
        case "w": new Audio('sounds/crash.mp3').play();break;
        case "a": new Audio('sounds/kick-bass.mp3').play();break;
        case "s": new Audio('sounds/snare.mp3').play();break;
        case "d": new Audio('sounds/tom-1.mp3').play();break;
        case "j": new Audio('sounds/tom-2.mp3').play();break;
        case "k": new Audio('sounds/tom-3.mp3').play();break;
        case "l": new Audio('sounds/tom-4.mp3').play();break;
    }
}

var d = document.querySelectorAll("button.drum");
for(var i =0; i<d.length; i++)  d[i].addEventListener("click", function(){
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
});
document.addEventListener("keydown", function(logKey){
    makeSound(logKey.key);
    buttonAnimation(logKey.key);
});
