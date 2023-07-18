/**
 * @file        script.js
 * @description Implements logic for calculator
 * @author      Jude Thaddeau Data
 * @link        GitHub: https://github.com/jtd-117
* --------------------------------------------------------------------------- */
/**
 * @description An enumeration of operations supported by the calculator.
 */
const operators = Object.freeze({
    Add:        0,
    Subtract:   1,
    Multiply:   2,
    Divide:     3,
    Modulo:     4,
});
/* -------------------------------------------------------------------------- */
/**
 * @description         (AUXILIARY) ADDS two numbers.
 * @param   {number}    number1 The first addend
 * @param   {number}    number2 The second addend
 * @returns {string}    The result of the adding of the arguments.
 */
function add(number1, number2) {
    return (number1 + number2).toString();
}
/* -------------------------------------------------------------------------- */
/**
 * @description         (AUXILIARY) SUBTRACTS two numbers.
 * @param   {number}    number1 The minuend
 * @param   {number}    number2 The subtrahend
 * @returns {string}    The result of the subtracting of the arguments.
 */
function subtract(number1, number2) {
    return (number1 - number2).toString();
}
/* -------------------------------------------------------------------------- */
/**
 * @description         (AUXILIARY) MULTIPLIES two numbers.
 * @param   {number}    number1 The multiplicand
 * @param   {number}    number2 The multiplicator
 * @returns {string}    The result of the multiplication of the arguments.
 */
function multiply(number1, number2) {
    return (number1 * number2).toString();
}
/* -------------------------------------------------------------------------- */
/**
 * @description         (AUXILIARY) DIVIDES two numbers.
 * @param   {number}    number1 The dividend
 * @param   {number}    number2 The divisor
 * @returns {string}    The result of the division of the arguments.
 */
function divide(number1, number2) {
    return (number1 / number2).toString();
}
/* -------------------------------------------------------------------------- */
/**
 * @description         (AUXILIARY) Calculates the REMAINDER after dividing 
 *                      two numbers.
 * @param   {number}    number1 The dividend
 * @param   {number}    number2 The divisor
 * @returns {string}    The result of the modulo of the arguments.
 */
function modulo(number1, number2) {
    return (number1 % number2).toString();
}
/* -------------------------------------------------------------------------- */
/**
 * @description         Decides which auxiliary operator function to call.
 * @returns {string}    The result of the desired operation as a `string`.
 */
function operate() {

    // STEP 1: Ensure arguments do not lead to sytnax error

    // STEP 2: Decide perform an operation according to `operator`
    number1 = Number(number1);
    number2 = Number(number2);
    if (operator === operators.Add) {
        return add(number1, number2);
    } else if (operator === operators.Subtract) {
        return subtract(number1, number2);
    } else if (operator === operators.Multiply) {
        return multiply(number1, number2);
    } else if (operator === operators.Divide) {
        return divide(number1, number2);
    } else {
        return modulo(number1, number2);
    }
}
/* -------------------------------------------------------------------------- */
/**
 * @description     Assigns an ENUM vale from `operators` to `operator` 
 *                  variable.
 * @param {Event}   e The event caused by a "click"
 */
function assignOperator(e) {

    // CASE 1A: 'Add' button was pressed
    if (e.target.id === "add") {
        operator = operators.Add;

    // CASE 1B: 'Subtract' button was pressed
    } else if (e.target.id === "subtract") {
        operator = operators.Subtract;

    // CASE 1C: 'Multiply' button was pressed
    } else if (e.target.id === "multiply") {
        operator = operators.Multiply;
    
    // CASE 1D: 'Divide' button was pressed
    } else if (e.target.id === "divide") {
        operator = operators.Divide;
    
    // CASE 1E: 'Modulo' button was pressed
    } else {
        operator = operators.Modulo;
    }
}
/* -------------------------------------------------------------------------- */
/**
 * @description     Composes a NUMBER after every button input.
 * @param {Event}   e The event caused by a "click"
 */
function composeNumber(e) {

    // CASE A: Composing the FIRST number
    if (operator === null) {
        number1 = number1.concat(e.target.value);
        console.log(number1);
    
    // CASE B: Composing the SECOND number
    } else {
        number2 = number2.concat(e.target.value);
        console.log(number2);
    }
}
/* -------------------------------------------------------------------------- */

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

// STEP 3: Event listners for basic operatations
addBtn.addEventListener("click", assignOperator);
subtractBtn.addEventListener("click", assignOperator);
multiplyBtn.addEventListener("click", assignOperator);
divideBtn.addEventListener("click", assignOperator);
moduloBtn.addEventListener("click", assignOperator);

// STEP 3: Event listeners for number & decimal buttons
for (let i = 0; i <= 9; i++) {
    const numberBtn = document.getElementById(`number-${i}`);
    numberBtn.addEventListener("click", composeNumber);
}
decimalBtn.addEventListener("click", composeNumber);
