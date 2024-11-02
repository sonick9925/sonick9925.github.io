let btn1 = document.querySelector('.btn-1')
let p1 = document.querySelector('.p-1')
btn1.onclick = function () {
    p1.innerHTML = ' '
    for (let i = 0; i < 51; i++) {
        p1.innerHTML += i + '  ';
    }
}
let btn2 = document.querySelector('.btn-2')
let p2 = document.querySelector('.p-2')
btn2.onclick = function () {
    p2.innerHTML = ' '
    for (let i = 2; i < 123; i = i + 2) {
        p2.innerHTML += i + '  ';
    }
}
let btn3 = document.querySelector('.btn-3')
let p3 = document.querySelector('.p-3')
btn3.onclick = function () {
    p3.innerHTML = ' '
    for (let i = 25; i > 6; i--) {
        p3.innerHTML += i + '  ';
    }
}
let btn4 = document.querySelector('.btn-4')
let p4 = document.querySelector('.p-4')
btn4.onclick = function () {
    p4.innerHTML = ''
    for (let i = 77; i > 34; i = i - 3) {
        p4.innerHTML += i + '_ ';
    }
}
let btn5 = document.querySelector('.btn-5')
let p5 = document.querySelector('.p-5')
btn5.onclick = function () {
    p5.innerHTML = '';
    for (let i = 1; i < 17; i++) {
        if (i % 2 == 0) {
            p5.innerHTML += i + '_**';
        }
        else {
            p5.innerHTML += i + '_*';
        }
    }
}
let btn6 = document.querySelector('.btn-6')
let p6 = document.querySelector('.p-6')
let inp6 = document.querySelector('.inp-6')
btn6.onclick = function () {
    let x = inp6.value;
    for (let i = 0; i < x; i++) {
        p6.innerHTML += '*****<br>'
    }
}
let btn7 = document.querySelector('.btn-7')
let p7 = document.querySelector('.p-7')
let inp7 = document.querySelector('.inp-7')
btn7.onclick = function () {
    p7.innerHTML = ''
    let x = inp7.value
    for (let i = x; i > 0; i--)
        p7.innerHTML += i + ' '
}
let btn8 = document.querySelector('.btn-8')
let p8 = document.querySelector('.p-8')
let inp8 = document.querySelector('.inp-8')
let inp9 = document.querySelector('.inp-9')
btn8.onclick = function () {
    p8.innerHTML = ''
    let x = inp8.value
    let y = inp9.value
    for (let i = x; i < y; i++) {
        p8.innerHTML += i + ' '

    }

}
let btn9 = document.querySelector('.btn-9')
let p9 = document.querySelector('.p-9')
let inp10 = document.querySelector('.inp-10')
let inp11 = document.querySelector('.inp-11')
btn9.onclick = function () {
    p9.innerHTML = ''
    let x = +inp10.value
    let y = +inp11.value
    if (x > y){
        let temp = y
        y = x
        x = temp
    }
    for (let i = x; i < y; i++) {
        p9.innerHTML += i + ' '
    }
}
