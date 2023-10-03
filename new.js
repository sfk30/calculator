const container = document.getElementById('container')

const operators = document.querySelectorAll('.operator')
const numbers = document.querySelectorAll('.num')
const clearBtn = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')
const equalsBtn = document.getElementById('equals')


equalsBtn.addEventListener('click', calculate)
clearBtn.addEventListener('click', clearMe)
deleteBtn.addEventListener('click', deleteMe)

const topDisplay = document.getElementById('top')
topDisplay.innerHTML = ''
const bottomDisplay = document.getElementById('bottom')
bottomDisplay.innerHTML = ''


const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

let prevNumber = ''

let currentNumber = ''

let operator = ''



numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        getNumber(e.target.textContent)
    })
})

function getNumber(num) {
    currentNumber += num
    topDisplay.innerHTML = currentNumber
}

operators.forEach((button) => {
    button.addEventListener('click', (e) => {
        getOp(e.target.textContent)
    })
})

function getOp(op) {
    if (op === '') {
    prevNumber = currentNumber
    } else if (prevNumber != '') {
        prevNumber = calculate(operator, prevNumber, currentNumber)
    }

    topDisplay.innerHTML = prevNumber + ' ' + op
    operator = op
    currentNumber = ''
}



operators.forEach((oper) => {
    oper.addEventListener('click', () => {
        operator = oper.textContent
        topDisplay.innerHTML = prevNumber + ' ' + operator
    })
})

numbers.forEach((number) => {
    number.addEventListener('click', () => { 
        if (operator === ''){
        prevNumber += number.textContent
        topDisplay.innerHTML = prevNumber
        // console.log(`num 1 is ${prevNumber}`)
        } else {
        currentNumber += number.textContent
        topDisplay.innerHTML = prevNumber + ' ' + operator + ' ' + currentNumber
        // console.log(`num 2 is ${currentNumber}`)
        }
    } )
})


function deleteMe() {
    bottomDisplay.innerHTML = ''
    topDisplay.innerHTML = topDisplay.innerHTML.slice(0,-1)
}

function calculate(operator, prevNumber,currentNumber) {
    prevNumber = Number(prevNumber)
    currentNumber = Number(currentNumber)
    if (operator === '+') {
        result = add(prevNumber, currentNumber)
        bottomDisplay.innerHTML = result
        prevNumber = result
        currentNumber = ''
        operator = ''
    }  else if (operator === '-') {
        result = subtract(prevNumber, currentNumber)
        bottomDisplay.innerHTML = result
        prevNumber = result
        currentNumber = ''
        operator = ''
    }  else if (operator === '*') {
        result = multiply(prevNumber, currentNumber)
        bottomDisplay.innerHTML = result
        prevNumber = result
        currentNumber = ''
        operator = ''
    }  else if (operator === '÷' && currentNumber === 0) {
        bottomDisplay.innerHTML = 'ERROR'
    }  else if (operator === '÷') {
        result = divide(prevNumber, currentNumber)
        bottomDisplay.innerHTML = result
        prevNumber = result
        currentNumber = ''
        operator = ''
    }

}



function clearMe() {
    topDisplay.innerHTML = ''
    bottomDisplay.innerHTML = ''
    prevNumber = ''
    currentNumber = ''
    operator = ''
    result = ''
}