/**
 * @file        script.js
 * @description Implements logic for calculator
 * @author      Jude Thaddeau Data
 * @link        GitHub: https://github.com/jtd-117
 */

/**
 * @description An enumeration of operations supported by the calculator.
 */
const operators = Object.freeze({
    Add:        "+",
    Subtract:   "-",
    Multiply:   "x",
    Divide:     "÷",
    Modulo:     "%",
});

/**
 * @description         Decides which auxiliary operator function to call.
 * @returns {string}    The result of the desired operation as a `string`.
 */
function operate() {

    if (powerBtn.classList.contains("off")) return;

    // Ensure arguments do not lead to sytnax error
    if ((number1 === "") || (number2 === "") || (operator === null)) {
        resultTag.textContent = "Syntax Error";
        return;
    }
    number1 = Number(number1);
    number2 = Number(number2);
    expressionTag.textContent = `${number1} ${operator} ${number2} =`;

    // Decide perform an operation according to `operator`
    if (operator === operators.Add) {
        number1 = number1 + number2;

    } else if (operator === operators.Subtract) {
        number1 = number1 - number2;

    } else if (operator === operators.Multiply) {
        number1 = number1 * number2;

    } else if (operator === operators.Divide) {
        number1 = number1 / number2;

    } else {
        number1 = number1 % number2;
    }
    resultTag.textContent = number1;
    number2 = "";
    operator = null;
}

/**
 * @description     Assigns an ENUM vale from `operators` to `operator` 
 *                  variable.
 * @param {Event}   e The event caused by a "click"
 */
function assignOperator(e) {

    if (powerBtn.classList.contains("off")) return;

    if (e.target.id === "add") {
        operator = operators.Add;

    } else if (e.target.id === "subtract") {

        // Attempting to create a negative number for 'number1'
        if (number1 === "") {
            number1 = "-".concat(number2);
            number2 = "";
            resultTag.textContent = number1;
            return;

        // Attempting to create a negative number for 'number2'
        } else if (number2 === "" && operator !== null) {
            number2 = "-".concat(number2);
            resultTag.textContent = number2;
            return;
        }
        // Trying to subtract
        operator = operators.Subtract;

    } else if (e.target.id === "multiply") {
        operator = operators.Multiply;
    
    } else if (e.target.id === "divide") {
        operator = operators.Divide;

    } else {
        operator = operators.Modulo;
    }
    expressionTag.textContent = `${Number(number1)} ${operator}`;
}

/**
 * @description     Composes a NUMBER after every button input.
 * @param {Event}   e The event caused by a "click"
 */
function composeNumber(e) {
    if (powerBtn.classList.contains("off")) return;

    if (operator === null) {
        number1 = number1.concat(e.target.value);
        resultTag.textContent = number1;
    } else {
        number2 = number2.concat(e.target.value);
        resultTag.textContent = number2;
    }
}

/**
 * @description Resets variables to their default state.
 */
function resetVariables() {

    if (powerBtn.classList.contains("off")) return;
    number1 = "";
    number2 = "";
    operator = null;
    expressionTag.textContent = "";
    resultTag.textContent = "0";
}

/**
 * @description Deletes a character from the 'result' tag.
 */
function deleteCharacter() {

    if (powerBtn.classList.contains("off")) return;

    if (operator === null) {
        number1 = number1.slice(0, -1);
        resultTag.textContent = Number(number1);
    } else {
        number2 = number2.slice(0, -1);
        resultTag.textContent = Number(number2);
    }
}

/**
 * @description Logic for power on & off.
 */
function togglePower() {

    powerBtn.classList.toggle("off");
    if (powerBtn.classList.contains("off") === false) {
        resetVariables();
    } else {
        expressionTag.textContent = "";
        resultTag.textContent = "";
    }
}

/* CONNECTING THE FRONT & BACK ENDS TOGETHER */

// STEP 1: Initialise variables
let number1 = "";
let number2 = "";
let operator = null;

// STEP 2: Query Selectors
const powerBtn = document.getElementById("power");
const deleteBtn = document.getElementById("delete");
const allClearBtn = document.getElementById("all-clear");
const equalsBtn = document.getElementById("equals");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const moduloBtn = document.getElementById("modulo");
const decimalBtn = document.getElementById("decimal");
const numberBtns = document.querySelectorAll(`input[class="number"]`);
const expressionTag = document.getElementById("expression");
const resultTag = document.getElementById("result");

// STEP 3: Event listeners for basic operations & equals buttons
const operationBtns = [addBtn, subtractBtn, multiplyBtn, divideBtn, moduloBtn];
operationBtns.forEach((op) => op.addEventListener("click", assignOperator));
equalsBtn.addEventListener("click", operate);

// STEP 3: Event listeners for number & decimal buttons
numberBtns.forEach((numberBtn) => numberBtn.addEventListener("click", composeNumber));
decimalBtn.addEventListener("click", composeNumber);

// STEP 4: Event listeners for 'delete', 'all-clear' & 'power' buttons
allClearBtn.addEventListener("click", resetVariables);
deleteBtn.addEventListener("click", deleteCharacter);
powerBtn.addEventListener("click", togglePower);

// STEP 5: Add sound effects for button press
const buttonSound = new Audio("sounds/button-press.mp3");
const allBtns = document.querySelectorAll(`input[type="button"]`);
allBtns.forEach((btn) => btn.addEventListener("click", () => buttonSound.play()));
