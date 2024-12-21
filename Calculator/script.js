let currentInput = "";
let operator = null;
let previousInput = "";

// Append number to the display
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Set the operator for the operation
function setOperator(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

// Calculate the result
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                alert("Cannot divide by 0");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = "";
    updateDisplay();
}

// Clear the display
function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = null;
    updateDisplay();
}

// Update the display with the current input
function updateDisplay() {
    document.getElementById("display").value = currentInput;
}