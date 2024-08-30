function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        alert("Invalid input!");
    }
}

function toggleSign() {
    let currentDisplay = document.getElementById("display").value;
    if (currentDisplay.charAt(0) === "-") {
        document.getElementById("display").value = currentDisplay.substring(1);
    } else if (currentDisplay.length > 0) {
        document.getElementById("display").value = "-" + currentDisplay;
    }
}

function calculatePercentage() {
    let currentDisplay = document.getElementById("display").value;
    if (currentDisplay.length > 0) {
        let percentageValue = parseFloat(currentDisplay) / 100;
        document.getElementById("display").value = percentageValue;
    }
}

// Listen for keydown events
document.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        deleteLast();
    }
});
