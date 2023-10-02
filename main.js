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

operators.forEach((oper) => {
    oper.addEventListener('click', () => {
        operator = oper.textContent
        topDisplay.innerHTML = num1 + ' ' + operator
    })
})

numbers.forEach((number) => {
    number.addEventListener('click', () => { 
        if (operator === ''){
        num1 += number.textContent
        topDisplay.innerHTML = num1
        // console.log(`num 1 is ${num1}`)
        } else {
        num2 += number.textContent
        topDisplay.innerHTML = num1 + ' ' + operator + ' ' + num2
        // console.log(`num 2 is ${num2}`)
        }
    } )
})


function deleteMe() {
    bottomDisplay.innerHTML = ''
    topDisplay.innerHTML = topDisplay.innerHTML.slice(0,-1)
}

function calculate() {
    num1 = Number(num1)
    num2 = Number(num2)
    if (operator === '+') {
        bottomDisplay.innerHTML = add(num1, num2)
    }  else if (operator === '-') {
        bottomDisplay.innerHTML = subtract(num1, num2)
    }  else if (operator === '*') {
        bottomDisplay.innerHTML = multiply(num1, num2)
    }  else if (operator === '÷' && num2 === 0) {
        bottomDisplay.innerHTML = 'ERROR'
    }  else if (operator === '÷') {
        bottomDisplay.innerHTML = divide(num1, num2)
    }

}



function clearMe() {
    topDisplay.innerHTML = ''
    bottomDisplay.innerHTML = ''
    num1 = ''
    num2 = ''
    operator = ''
}


