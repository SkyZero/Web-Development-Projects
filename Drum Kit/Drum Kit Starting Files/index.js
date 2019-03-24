var i = 0;

while (i < document.querySelectorAll(".drum").length) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
  i++;
} //added eventlistener to all buttons and listen for clicks


function handleClick() {
  var buttonInnerHTML = this.innerHTML; //take in buttonInnerHTML = which button pressed
  makeSound(buttonInnerHTML); //uses the buttonInnerHTML to choose which sound to make
  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", handleKeydown); //add eventlistener to all keyboard presses

function handleKeydown() {
  makeSound(event.key);
  buttonAnimation(event.key);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;
    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:

  }
}

function buttonAnimation(currentKey){

var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed"); //add in the list of classes of var activeButton
setTimeout(function(){
  activeButton.classList.remove("pressed"); //removes the class from the list of classes
}, 100);
}
