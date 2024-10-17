const INPUT_ELEM = document.querySelector("#text-input");
const BUTTON_ELEM = document.querySelector("#check-btn");
const RESULT_ELEM = document.querySelector("#result");

function clearResults() {
  RESULT_ELEM.textContent = "";
}

function showResult(result) {
  clearResults();

  const pElem = document.createElement("p");
  pElem.classList.add("result");
  pElem.textContent = result;
  RESULT_ELEM.appendChild(pElem);
  RESULT_ELEM.classList.remove("hide");
}

function checkPalinDrome(inputText) {
  const matchLettersAndNumbers = inputText.match(/[a-zA-Z0-9]/g);
  const characters = matchLettersAndNumbers.join("").toLowerCase();
  const reverseCharacters = matchLettersAndNumbers.reverse().join("").toLowerCase();
  const result = characters === reverseCharacters ?
  `${inputText} is a palindrome` :
  `${inputText} is not a palindrome`;
  
  showResult(result);
}

function onClick() {
  const inputText = INPUT_ELEM.value;

  if (inputText === "") return alert("Please input a value");
  checkPalinDrome(inputText);
  clearInput();
}

function clearInput() {
  INPUT_ELEM.value = "";
}

function onKeyUp(event) {
  const inputText = INPUT_ELEM.value;

  if (event.key === "Enter") {
    if (inputText === "") return alert("Please input a value");
    checkPalinDrome(inputText);
    clearInput();
  }
}

function run() {
  INPUT_ELEM.addEventListener("keyup", onKeyUp);
  BUTTON_ELEM.addEventListener("click" , onClick);
}

run();