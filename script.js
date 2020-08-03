//4 digit random number generator
const generatePinButton = document.querySelector(".generate-btn");
let randomPinInput = document.querySelector(".random-pin-input");
generatePinButton.addEventListener("click", () => {
  let randomPin = Math.floor(1000 + Math.random() * 9000 - 1);
  randomPinInput.value = randomPin;
  resetNI();
});

// pin typing section
let pinInput = document.querySelector(".pinTypeInput");
function insert(num) {
  pinInput.value = pinInput.value + num;
}
//clear all
const clearAll = document.querySelector("[data-clear-all]");
function cleanAll() {
  pinInput.value = "";
}
//submit button function
function submit() {
  let notifyError = document.getElementById("notify-error");
  let notifySuccess = document.getElementById("notify-success");
  if (randomPinInput.value !== pinInput.value) {
    notifyError.style.display = "block";
    notifySuccess.style.display = "none";
    acitonLeft();
  } else {
    notifySuccess.style.display = "block";
    notifyError.style.display = "none";
    document.querySelector("[data-submit-button]").disabled = true;
    document.querySelector(".action-left").style = "display: none;";
    document.querySelector(".ghost-dance").style = "display: block";
    setTimeout(() => {
      document.querySelector(".ghost-dance").style = "display: none";
    }, 9000);
  }
  //if tow input is empty
  if (randomPinInput.value === "" && pinInput.value === "") {
    notifySuccess.style.display = "none";
    notifyError.style.display = "none";
  }

  // if random & input pin input is empty
  if (randomPinInput.value === "") {
    alert("Opps.Please generate a Pin");
    notifySuccess.style.display = "none";
    notifyError.style.display = "none";
  } else if (pinInput.value === "") {
    alert("Opps.Please type a Pin");
    notifySuccess.style.display = "none";
    notifyError.style.display = "none";
    let actionLeft = document.querySelector(".action-left-number").innerText;
    actionLeft = parseInt(actionLeft);
    document.querySelector(".action-left-number").innerText = actionLeft + 1;
    document.querySelector(".action-left").style = "display: block;";
  }
}

// type input number delete
function back() {
  let inputNumber = pinInput.value;
  pinInput.value = inputNumber.substring(0, pinInput.value.length - 1);
}

// reset notification, type input , img, actionLeft , btn , input
function resetNI() {
  document.getElementById("notify-error").style.display = "none";
  document.getElementById("notify-success").style.display = "none";
  pinInput.value = "";
  document.querySelector(".action-left-number").innerText = 3;
  document.querySelector("[data-submit-button]").disabled = false;
  document.querySelector(".action-left").style = "display: block;";
  document.querySelector(".ghost-dance").style = "display: none";
}

// action decrease
function acitonLeft() {
  let actionLeft = document.querySelector(".action-left-number").innerText;
  if (randomPinInput.value !== pinInput.value && actionLeft > 0) {
    document.querySelector(".action-left-number").innerText = actionLeft - 1;
    // console.log(actionLeft);
  }
  if (actionLeft == 1) {
    let submitButton = document.querySelector("[data-submit-button]");
    submitButton.disabled = true;
  }
}

// input text center
let inputCenterText = document.querySelectorAll('[type="text"]');
inputCenterText.forEach((element) => {
  element.style = "text-align: center;";
});
