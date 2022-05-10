// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

//factory function Instance
let billSettings = BillWithSettings();

//buttons
const BtnAdd = document.querySelector(".addSettings");
const updtBtn = document.querySelector(".updateSettings");

//settings values
const callCostValue = document.querySelector(".callCostSetting");
const smsCostValue = document.querySelector(".smsCostSetting");
const warningLevelValue = document.querySelector(".warningLevelSetting");
const criticalLevelValue = document.querySelector(".criticalLevelSetting");

//Totals display
const smsValue = document.querySelector(".smsTotalSettings");
const callValue = document.querySelector(".callTotalSettings");
const billValue = document.querySelector(".totalSettings");
const colorSet = document.querySelector(".color");

//Update event listener
updtBtn.addEventListener("click", function () {
  //convert values to Numbers

  let callCost = Number(callCostValue.value);
  let smsCost = Number(smsCostValue.value);
  let warningLevel = Number(warningLevelValue.value);
  let criticalLevel = Number(criticalLevelValue.value);

  //Settings inputs
  billSettings.setCallCost(callCost);
  billSettings.setSmsCost(smsCost);
  billSettings.setWarningLevel(warningLevel);
  billSettings.setCriticalLevel(criticalLevel);

  //Update the class name
  colorSet.classList.remove("warning");
  colorSet.classList.remove("danger");
  colorSet.classList.add(billSettings.totalClassName());
});

//Add cost event listener
BtnAdd.addEventListener("click", function () {
  const thisRadio = document.querySelector(".billItemTypeWithSettings:checked");

  //check whether radio value is call, if so make a call
  if (thisRadio.value === "call") {
    billSettings.makeCall();
    callValue.innerHTML = billSettings.getTotalCallCost();
  }
  if (thisRadio.value === "sms") {
    billSettings.sendSms();
    smsValue.innerHTML = billSettings.getTotalSmsCost();
  }
  billValue.innerHTML = billSettings.getTotalCost();

  //Update the class name
  colorSet.classList.remove("warning");
  colorSet.classList.remove("danger");
  colorSet.classList.add(billSettings.totalClassName());
});
