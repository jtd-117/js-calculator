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
 * @param   {number}    number1 The numerator
 * @param   {number}    number2 The denominator
 * @returns {string}    The result of the division of the arguments.
 */
function divide(number1, number2) {
    return (number1 / number2).toString();
}
/* -------------------------------------------------------------------------- */
/**
 * @description         Decides which auxiliary operator function to call.
 * @param   {number}    value1      The first numeric string
 * @param   {number}    value2      The second numeric string
 * @param   {object}    operator    A value from the `operators` enum
 * @returns {string}    The result of the desired operation as a `string`.
 */
function operate(value1, value2, operator);

/* -------------------------------------------------------------------------- */

let lhsValue = "";
let rhsValue = "";
let operator = "";
