let counterElement = document.getElementById("counterValue");
function OnDecrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;
  counterElement.textContent = updatedCounterValue;

  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  } else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  } else {
    counterElement.style.color = "black";
  }
}
function OnReset() {
  let updatedCounterValue = 0;
  counterElement.textContent = updatedCounterValue;

  counterElement.style.color = "black";
}
function OnIncrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  counterElement.textContent = updatedCounterValue;

  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  } else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  } else {
    counterElement.style.color = "black";
  }
}
