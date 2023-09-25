// const buttonColours = ["red", "blue", "green", "yellow"];

// var GreenButton = document.querySelector(".green");
// var RedButton = document.querySelector(".red");
// var BlueButton = document.querySelector(".blue");
// var YellowButton = document.querySelector(".yellow");

// function GreenBTN() {
//   var audio = new Audio(`assets/sound/green.mp3`);
//   audio.play();
// }
// GreenButton.addEventListener("click", GreenBTN);

// function RedBTN() {
//   var audio = new Audio(`assets/sound/red.mp3`);
//   audio.play();
// }
// RedButton.addEventListener("click", RedBTN);

// function BlueBTN() {
//   var audio = new Audio(`assets/sound/blue.mp3`);
//   audio.play();
// }
// BlueButton.addEventListener("click", BlueBTN);

// function YellowBTN() {
//   var audio = new Audio(`assets/sound/yellow.mp3`);
//   audio.play();
// }
// YellowButton.addEventListener("click", YellowBTN);






const buttonColours = ["red", "blue", "green", "yellow"];

// Get references to the buttons using a loop
const buttons = {};
for (const color of buttonColours) {
  buttons[color] = document.querySelector("." + color);
}

// Function to handle button clicks
function handleButtonClick(color) {
  const audio = new Audio(`assets/sound/${color}.mp3`);
  audio.play();
}

// Add click event listeners to the buttons using the array
for (const color of buttonColours) {
  buttons[color].addEventListener("click", () => handleButtonClick(color));
}


// for (var i = 0; i < numberOfButtons.length; i++) {
//   numberOfButtons[i].addEventListener("click", handleClick);

//   function handleClick() {
//     var audio = new Audio(`assets/sound/${buttonColours}.mp3`);
//     audio.play();
//   }
// }
