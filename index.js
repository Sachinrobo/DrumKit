var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  //Detect button presses
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
// Listen key presses
document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

//Function to make sound on the basis of button code(that is character)
function playSound(char) {
  switch (char) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;
    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    default:
      console.log(char);
  }
}

//Add animation to this site
function buttonAnimation(currentKey) {
  //Select the class of buttons like, .w, .a, .s,...
  var activeButton = document.querySelector("." + currentKey);
  //Add the CSS class pressed using classList.add
  activeButton.classList.add("pressed");
  //To make it animate add time delay of 100ms to remove the CSS on the buttons
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
