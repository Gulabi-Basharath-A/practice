function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let currentInput = document.getElementById("display").value;
    document.getElementById("display").value = currentInput.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById("display").value;
    let sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, ''); // Sanitize input
    let result = new Function('return ' + sanitizedExpression)();
    document.getElementById("display").value = result;
}
