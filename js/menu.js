const menu = document.querySelector('.tres')
const menuContainer = document.querySelector('.menu-container')
const close = document.querySelector('.xs')


menu.addEventListener('click', ()=>{
    menuContainer.classList.toggle('spread')
    menu.classList.toggle('out')
    close.classList.toggle('aparece')
})

close.addEventListener('click', ()=>{
    menuContainer.classList.toggle('spread')
    menu.classList.toggle('out')
    close.classList.toggle('aparece')
})
