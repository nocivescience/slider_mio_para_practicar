const prevEl=document.querySelector('.prev');
const nextEl=document.querySelector('.next');
const cardEl=document.querySelector('.card');
let contador=1;
nextEl.addEventListener('click',()=>{
    cardEl.style.transform=`translateX(${contador*100}px)`;
    contador++;
    if(contador>3){
        contador=0
    }
})
prevEl.addEventListener('click',()=>{
    cardEl.style.transform=`translateX(${contador*100}px)`;
    contador--;
    if(contador<-3){
        contador=0
    }
})