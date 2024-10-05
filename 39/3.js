let number1 = document.querySelector('.inp-1')
let number2 = document.querySelector('.inp-2')
let p = document.querySelector('.p-1')

let btnPlus = document.querySelector('.btn-plus')
let btnMinus = document.querySelector('.btn-min')
let btnMnoj = document.querySelector('.btn-mnj')
let btnDiln = document.querySelector('.btn-diln')

let btnClear = document.querySelector('.btn-clear')

btnDiln.onclick = function () {
    p.innerHTML = number1.value / number2.value
}
btnPlus.onclick = function () {
    p.innerHTML = +number1.value + +number2.value
}
btnMinus.onclick = function () {
    p.innerHTML = number1.value - number2.value
}
btnMnoj.onclick = function () {
    p.innerHTML = number1.value * number2.value
}
btnClear.onclick = function () {
    number1.value = ""
    number2.value = ""
    p.innerHTML = ""
}