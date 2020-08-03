//4 digit random number generator
const generatePinButton = document.querySelector(".generate-btn");
let randomPinInput = document.querySelector(".random-pin-input");
generatePinButton.addEventListener("click", () => {
  let randomPin = Math.floor(1000 + Math.random() * 9000 - 1);
  randomPinInput.value = randomPin;
  resetNI();
});

// // calculator section
let pinInput = document.querySelector(".pinTypeInput");

function insert(num) {
  pinInput.value = pinInput.value + num;
}

const clearAll = document.querySelector("[data-clear-all]");
function cleanAll() {
  pinInput.value = "";
}

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
    document.querySelector("[data-submit-button]").disabled = false;
    // document.querySelector("[data-submit-button]").style = "outline: none;";
    document.querySelector(".action-left").style = "display: none;";
  }
  //if tow input is empty
  if (randomPinInput.value === "" && pinInput.value === "") {
    notifySuccess.style.display = "none";
    notifyError.style.display = "none";
  }

  // if random pin input is empty
  if (randomPinInput.value === "") {
    alert("Opps.Please generate a Pin");
    notifySuccess.style.display = "none";
    notifyError.style.display = "none";
  }
  /****************
   * eita korte gele try left a jhamela hoi.
   */
  //   else if (pinInput.value === "") {
  //     alert("Opps.Please type a Pin");
  //     notifySuccess.style.display = "none";
  //     notifyError.style.display = "none";
  //     // document.querySelector(".action-left-number").innerText = 3;
  //   }
}

// type input number delete
function back() {
  let inputNumber = pinInput.value;
  pinInput.value = inputNumber.substring(0, pinInput.value.length - 1);
}

// reset notification and type input
function resetNI() {
  document.getElementById("notify-error").style.display = "none";
  document.getElementById("notify-success").style.display = "none";
  pinInput.value = "";
  document.querySelector(".action-left-number").innerText = 3;
  document.querySelector("[data-submit-button]").disabled = false;
  document.querySelector(".action-left").style = "display: block;";
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
let inputCenterText = document.querySelector('[type="text"]');
inputCenterText.style = "text-align: center;";
