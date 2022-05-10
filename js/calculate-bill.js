//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
///Create variables for elements
const billString = document.querySelector(".billString");
const billTotal = document.querySelector(".billTotal");
const calcBtn = document.querySelector(".calculateBtn");
const totalElm = document.querySelector(".total");

//The click event with the bill function
calcBtn.addEventListener("click", function () {
  let billArr = billString.value.split(",");
  let billTot = 0;
  for (let i = 0; i < billArr.length; i++) {
    let billType = billArr[i].toLowerCase().trim();
    if (billType === "sms") {
      billTot += 0.75;
    } else if (billType === "call") {
      billTot += 2.75;
    } else if (billType !== "sms" || billType !== "call") {
      billTot += 0;
    }
  }
  totalElm.classList.remove("warning");
  totalElm.classList.remove("danger");
  if (billTot >= 20 && billTot < 30) {
    totalElm.classList.add("warning");
  } else if (billTot >= 30) {
    totalElm.classList.add("danger");
  }

  billTotal.innerHTML = billTot.toFixed(2);
});
