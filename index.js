console.log("All systems go!");

// This Handles Click Event
// How many buttons are there?
var numberOfDrumButtons = document.querySelectorAll(".key").length;
// For loop adds click to all 7 drum buttons
for (var i = 0; i < numberOfDrumButtons; i++) {
  // var i acts as placeholder for array position
  document.querySelectorAll(".key")[i].addEventListener("click", function() {
    // Detects inner html content (letter/key)
    var buttonInnerHTML = this.firstElementChild.innerHTML.toLowerCase();
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// This Handles Key Press Event
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// This Handles animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("playing");
  setTimeout(function() {
    activeButton.classList.remove("playing");
  }, 100);
}

// This designates key sounds
function makeSound(key) {
  switch (key) {
    case "a":
      var clap = new Audio("sounds/clap.wav");
      clap.play();
      break;
    case "s":
      var hihat = new Audio("sounds/hihat.wav");
      hihat.play();
      break;
    case "d":
      var kick = new Audio("sounds/kick.wav");
      kick.play();
      break;
    case "f":
      var openhat = new Audio("sounds/openhat.wav");
      openhat.play();
      break;
    case "g":
      var boom = new Audio("sounds/boom.wav");
      boom.play();
      break;
    case "h":
      var ride = new Audio("sounds/ride.wav");
      ride.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.wav");
      snare.play();
      break;
    case "k":
      var tom = new Audio("sounds/tom.wav");
      tom.play();
      break;
    case "l":
      var tink = new Audio("sounds/tink.wav");
      tink.play();
      break;
    default: console.log(this);
  }
}





// Original code only handles key press but targets data attributes

// function removeTransition(e) {
//   if (e.propertyName !== 'transform') return; // skip it if it is not a transform
//   e.target.classList.remove('playing');
// }

// function playSound(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Declare each audio element as a variable
//   const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // Declare each key as a variable
//   if (!audio) return; // Stop function from running if no audio element is detected

//   key.classList.add('playing'); //add transition style
//   audio.currentTime = 0; // rewind to start
//   audio.play(); // Play sound
// }

// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);

