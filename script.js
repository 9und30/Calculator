let input = document.querySelector('#input')
let result = document.querySelector('#result')

function appendOperation(operation) {
    input.innerHTML += operation
}

function calculateResult() {
    result.innerHTML = eval(input.innerHTML)
}

function clearAll() {
    input.innerHTML = null
    result.innerHTML = null
}

function clearLast() {
    if (!input.innerHTML.endsWith(' ')) {
        input.innerHTML = input.innerHTML.slice(0, -1)
    }
    else {
        input.innerHTML = input.innerHTML.slice(0, -3)
    }
}

function percent() {
    result.innerHTML /= 100
}