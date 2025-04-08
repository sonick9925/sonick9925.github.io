let star = document.querySelector('.star')
let moon = document.querySelector('.moon')
let behind = document.querySelector('.behind')
let front = document.querySelector('.front')
let text = document.querySelector('.text')
window.addEventListener('scroll',function(){
console.log(scrollY)
moon.style.top = scrollY*1.5+'px'
star.style.left = scrollY*0.5+'px'
text.style.left = -scrollY*0.5+'px'
behind.style.top = scrollY*1.1+'px'
})