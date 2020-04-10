'use strict'
const basketBtn=document.querySelector('.basket-btn');//кнопка корзины
const modalWindow=document.querySelector('.modal');//модалка
const cancelBtn=modalWindow.querySelector('.cancel');//кнопка закрытия модалки







basketBtn.addEventListener('click',()=>{
    modalWindow.classList.add('open-modal');
});

cancelBtn.addEventListener('click',()=>{
    modalWindow.classList.remove('open-modal');
});


new WOW().init();