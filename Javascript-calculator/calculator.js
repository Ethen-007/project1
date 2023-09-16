function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum-el").textContent = "Result: Please enter valid numbers.";
    } else {
        const sum = num1 + num2;
        document.getElementById("sum-el").textContent = "Result: " + sum;
    }
}
function sub() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum-el").textContent = "Result: Please enter valid numbers.";
    } else {
        const sum = num1 - num2;
        document.getElementById("sum-el").textContent = "Result: " + sum;
    }
}
function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum-el").textContent = "Result: Please enter valid numbers.";
    } else {
        const sum = num1 * num2;
        document.getElementById("sum-el").textContent = "Result: " + sum;
    }
}
function division() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum-el").textContent = "Result: Please enter valid numbers.";
    } else {
        const sum = num1 / num2;
        document.getElementById("sum-el").textContent = "Result: " + sum;
    }
}