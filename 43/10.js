let btn = document.querySelectorAll('.btn-drink')
let div = document.querySelectorAll('.hide-div')

for(let i = 0;i<btn.length;i++){
    btn[i].onclick = function (){
        div[i].style.transform = 'translateY(0)';
    }
}
for (let i = 0;i< div.length; i++){
    div[i].onclick = function(){
         div[i].style.transform = 'translateY(100%)'
    }
   
}
let moreText = document.querySelector('.more-text')
let moreBtn = document.querySelector('.read-more-btn')
let minBtn = document.querySelector('.read-min-btn')

moreBtn.addEventListener('click',function () {
 moreText.style.display = 'block'
}
)
minBtn.addEventListener('click',function () {
    moreText.style.display = 'none'
   }
   )
   