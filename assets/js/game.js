const buttonColours = ["red", "blue", "green", "yellow"];

var numberOfButtons = document.querySelectorAll(".btn");

for (var i = 0; i < numberOfButtons.length; i++) {
  numberOfButtons[i].addEventListener("click", handleClick);

  function handleClick() {
    var audio = new Audio("assets/sound/green.mp3");
    audio.play();
  }
}
