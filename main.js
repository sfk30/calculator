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

let num1 = ''

let num2 = ''

let operator = ''

let tempOperators = []

operators.forEach((oper) => {
    oper.addEventListener('click', () => {
        operator = oper.textContent
        tempOperators.push(operator)
        console.log(tempOperators)
        console.log(tempOperators.length)
        operatorClicked()
    })
})

function operatorClicked(op) {
    if (tempOperators.length <= 1) {
        operator = op
    }   else if (tempOperators.length = 2) {
        operator = tempOperators[0]
        console.log(operator)
        calculate()
        tempOperators.shift()
        operator = tempOperators[0]
        console.log(operator)
    }
}

numbers.forEach((number) => {
    number.addEventListener('click', () => { 
        if (operator === ''){
        num1 += number.textContent
        topDisplay.innerHTML = num1
        // console.log(`num 1 is ${num1}`)
        } else {
        num2 += number.textContent
        topDisplay.innerHTML = num1 + ' ' + tempOperators[0] + ' ' + num2
        // console.log(`num 2 is ${num2}`)
        }
    } )
})


function deleteMe() {
    bottomDisplay.innerHTML = ''
    topDisplay.innerHTML = topDisplay.innerHTML.slice(0,-1)
    num2 = num2.slice(0,-1)
}

function calculate() {
    num1 = Number(num1)
    num2 = Number(num2)
    if (operator === '+') {
        result = add(num1, num2)
        bottomDisplay.innerHTML = result
        num1 = result
        num2 = ''
        operator = ''
    }  else if (operator === '-') {
        result = subtract(num1, num2)
        bottomDisplay.innerHTML = result
        num1 = result
        num2 = ''
        operator = ''
    }  else if (operator === '*') {
        result = multiply(num1, num2)
        bottomDisplay.innerHTML = result
        num1 = result
        num2 = ''
        operator = ''
    }  else if (operator === '÷' && num2 === 0) {
        bottomDisplay.innerHTML = 'ERROR'
    }  else if (operator === '÷') {
        result = divide(num1, num2)
        bottomDisplay.innerHTML = result
        num1 = result
        num2 = ''
        operator = ''
    }

}



function clearMe() {
    topDisplay.innerHTML = ''
    bottomDisplay.innerHTML = ''
    num1 = ''
    num2 = ''
    operator = ''
    result = ''
}