function BillWithSettings() {
  var theCallCost = 0;
  var theSmsCost = 0;
  var theWarningLevel = 0;
  var theCriticalLevel = 0;

  var callCostTotal = 0;
  var smsCostTotal = 0;
  var billTotal = 0;

  function setCallCost(callCost) {
    theCallCost = callCost;
  }
  function getCallCost() {
    return theCallCost;
  }

  function setSmsCost(smsCost) {
    theSmsCost = smsCost;
  }

  function getSmsCost() {
    return theSmsCost;
  }

  function setWarningLevel(warningLevel) {
    theWarningLevel = warningLevel;
  }

  function getWarningLevel() {
    return theWarningLevel;
  }

  function setCriticalLevel(criticalLevel) {
    theCriticalLevel = criticalLevel;
  }

  function getCriticalLevel() {
    return theCriticalLevel;
  }
  function makeCall() {
    if (!hasReachedCrititcalLevel()) {
      callCostTotal += theCallCost;
    }
  }

  function getTotalCost() {
    billTotal = callCostTotal + smsCostTotal;
    return billTotal.toFixed(2);
  }

  function getTotalSmsCost() {
    return smsCostTotal.toFixed(2);
  }
  function getTotalCallCost() {
    return callCostTotal.toFixed(2);
  }
  function sendSms() {
    if (!hasReachedCrititcalLevel()) {
      smsCostTotal += theSmsCost;
    }
  }
  function hasReachedCrititcalLevel() {
    return getTotalCost() >= getCriticalLevel();
  }
  function totalClassName() {
    if (hasReachedCrititcalLevel()) {
      return "danger";
    }
    if (getTotalCost() >= getWarningLevel()) {
      return "warning";
    }
  }
  return {
    setCallCost,
    getCallCost,
    setSmsCost,
    getSmsCost,
    setWarningLevel,
    getWarningLevel,
    setCriticalLevel,
    getCriticalLevel,
    makeCall,
    getTotalCallCost,
    getTotalCost,
    getTotalSmsCost,
    sendSms,
    totalClassName,
  };
}
