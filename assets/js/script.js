//  Create the button for increment and decrement
const buttonIncreases = document.createElement("button"); //buttonDecreases
buttonIncreases.innerHTML = "+";
buttonIncreases.className = "btn Inc"; //add class

const buttonDecreases = document.createElement("button");
buttonDecreases.innerHTML = "-";
buttonDecreases.className = "btn Dec"; //add class

const buttonRESET = document.createElement("button");
buttonRESET.innerHTML = "RESET";
buttonRESET.id = "bR"; //add id
buttonRESET.className = "btn Res"; //add class

// Append in body
const body = document.getElementsByTagName("body")[0];
body.appendChild(buttonIncreases);

body.appendChild(buttonDecreases);

const divContainer = document.createElement("DIV"); // Create <div> to contain the value
const valueSpan = document.createElement("SPAN"); //create <span> for the value
const text = document.createTextNode("0"); //see 0 when opeen the app

valueSpan.id = "cb"; //id for span

valueSpan.appendChild(text);
divContainer.appendChild(valueSpan); //put the span into the div
body.appendChild(divContainer); // put the div into the body

body.appendChild(buttonRESET);

//------------------------------FUNCTION------------------------------

var valCounter = 0;
const btns = document.querySelectorAll(".btn"); //initialize const for select all the button

var number = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //event inside function

    const findClass = e.currentTarget.classList; //whith this, take the class inside the clicked button

    //control which button is clicked
    if (findClass.contains("Inc")) {
      number = 1;
    } else if (findClass.contains("Dec")) {
      number = -1;
    } else if (findClass.contains("Res")) {
      number = 0;
      valueSpan.style.color = "black";
    }

    updateCounter(number);

    if (valCounter > 0) {
      valueSpan.style.color = "green";
    } else if (valCounter < 0) {
      valueSpan.style.color = "red";
    }
  });
});

function updateCounter(number) {
  if (number == 0) {
    valCounter = 0;
    text.textContent = valCounter;
  } else {
    console.log("number " + number);
    console.log("valCounter " + valCounter);

    valCounter += number;
    text.textContent = valCounter;
  }
}
