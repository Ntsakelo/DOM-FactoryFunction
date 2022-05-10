// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const addBtn3 = document.querySelector(".radioBillAddBtn");
const callTotal3 = document.querySelector(".callTotalTwo");
const smsTotal3 = document.querySelector(".smsTotalTwo");
const billTotal3 = document.querySelector(".totalTwo");
const color = document.querySelector(".orange");

addBtn3.addEventListener("click", function () {
  const radioBill = document.querySelector(".billItemTypeRadio:checked");

  let callElement = Number(callTotal3.innerHTML);
  let smsElement = Number(smsTotal3.innerHTML);
  let theTotal = Number(billTotal3.innerHTML);
  if (radioBill.value === "call") {
    callElement += 2.75;
    callTotal3.innerHTML = callElement.toFixed(2);
  }
  if (radioBill.value === "sms") {
    smsElement += 0.75;
    smsTotal3.innerHTML = smsElement.toFixed(2);
  }
  theTotal = callElement + smsElement;
  billTotal3.innerHTML = theTotal.toFixed(2);
  color.classList.remove("warning");
  color.classList.remove("danger");
  if (theTotal >= 30 && theTotal < 50) {
    color.classList.add("warning");
  } else if (theTotal >= 50) {
    color.classList.add("danger");
  }
});
