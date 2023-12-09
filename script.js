"use strict";

function Output() {
  const userInput = document.getElementById("userInput").value;
  const newParagraph = document.createElement("p");
  //   newParagraph.textContent = 'You Entered: ' + userInput;

  if (userInput === "") {
    newParagraph.textContent = "Please provide an input";
  } else if (userInput === "Hi") {
    newParagraph.textContent = "Hi there!";
  } else if (+userInput === 100) {
    newParagraph.textContent = "You guessed it right, it is 100!";
  } else if (userInput > 100) {
    newParagraph.textContent = "Entered Value is greater than 100";
  } else if (userInput < 100) {
    newParagraph.textContent = "Entered Value is less than 100";
  }
  else {
    newParagraph.textContent = "You Entered: " + userInput;
  }

  const dynamicElement = document.getElementById("dynamicOutput");
  dynamicElement.appendChild(newParagraph);
}
