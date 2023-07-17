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
 * @description     
 * @param {number}  value1 The first numeric string
 * @param {number}  value2 The second numeric string
 */
function add(value1, value2) {
    
    // STEP 1: Convert arguments into values
    let number1 = Number(value1);
    let number2 = Number(value2);

    // STEP 2: Add the numbers
    let result = number1 + number2;

    // STEP 3: Return the result as a string
    return result.toString();
}
/* -------------------------------------------------------------------------- */
/**
 * @description     
 * @param {number}  value1 The first numeric string
 * @param {number}  value2 The second numeric string
 */
function subtract(value1, value2) {

    // STEP 1: Convert arguments into values
    let number1 = Number(value1);
    let number2 = Number(value2);

    // STEP 2: Subtract the numbers
    let result = number1 - number2;

    // STEP 3: Return the result as a string
    return result.toString();
}
/* -------------------------------------------------------------------------- */
/**
 * @description     
 * @param {number}  value1 The first numeric string
 * @param {number}  value2 The second numeric string
 */
function multiply(value1, value2) {

    // STEP 1: Convert arguments into values
    let number1 = Number(value1);
    let number2 = Number(value2);

    // STEP 2: Multiply the numbers
    let result = number1 * number2;

    // STEP 3: Return the result as a string
    return result.toString();
}
/* -------------------------------------------------------------------------- */
/**
 * @description     
 * @param {number}  value1 The first numeric string
 * @param {number}  value2 The second numeric string
 */
function divide(value1, value2) {

    // STEP 1: Convert arguments into values
    let number1 = Number(value1);
    let number2 = Number(value2);

    // STEP 2: Divide the numbers
    let result = number1 / number2;

    // STEP 3: Return the result as a string
    return result.toString();
}
/* -------------------------------------------------------------------------- */
/**
 * @description     
 * @param {number}  value1 The first numeric string
 * @param {number}  value2 The second numeric string
 */
function operate(value1, value2);

/* -------------------------------------------------------------------------- */

let lhsValue = "";
let rhsValue = "";
let operator = "";
