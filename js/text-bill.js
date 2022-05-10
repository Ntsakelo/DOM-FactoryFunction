// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

//DOM Variables
const billText = document.querySelector(".billTypeText");
const callTotal = document.querySelector(".callTotalOne");
const smsTotal = document.querySelector(".smsTotalOne");
const billTotal2 = document.querySelector(".totalOne");
const addBtn = document.querySelector(".addToBillBtn");
const totElm = document.querySelector(".red");

//add event listener and bill function
addBtn.addEventListener("click", function () {
  let callElm = Number(callTotal.innerHTML);
  let smsElm = Number(smsTotal.innerHTML);
  let total = Number(billTotal2.innerHTML);
  if (billText.value.toLowerCase() === "call") {
    callElm += 2.75;
    callTotal.innerHTML = callElm.toFixed(2);
  }
  if (billText.value.toLowerCase() === "sms") {
    smsElm += 0.75;
    smsTotal.innerHTML = smsElm.toFixed(2);
  }
  if (smsElm >= 0 && callElm >= 0) {
    total = callElm + smsElm;
    billTotal2.innerHTML = total.toFixed(2);
  }

  // totElm.classList.remove("warning");
  // totElm.classList.remove("danger");
  totElm.classList.remove("warning");
  totElm.classList.remove("danger");
  if (total >= 30 && total < 50) {
    totElm.classList.add("warning");
  } else if (total >= 50) {
    totElm.classList.add("danger");
  }
});
