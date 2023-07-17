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
    add:        0,
    subtract:   1,
    multiply:   2,
    divide:     3,
    modulo:     4,
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
 * @param   {number}    value1      The first operand as a numeric string
 * @param   {number}    value2      The second operand as a numeric string
 * @param   {object}    operator    A value from the `operators` enum
 * @returns {string}    The result of the desired operation as a `string`.
 */
function operate(value1, value2, operator) {

    // STEP 1: Convert the `value` arguments into numbers
    const number1 = Number(value1);
    const number2 = Number(value2);

    // STEP 2: Decide perform an operation according to `operator`
    if (operator === operators.add) {
        return add(number1, number2);
    } else if (operator === operators.subtract) {
        return subtract(number1, number2);
    } else if (operator === operators.multiply) {
        return multiply(number1, number2);
    } else if (operator === operators.divide) {
        return divide(number1, number2);
    } else {
        return modulo(number1, number2);
    }
}
/* -------------------------------------------------------------------------- */

/* CONNECTING THE FRONT & BACK ENDS TOGETHER */

// STEP 1: Query Selectors
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