const burger = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.burger-menu__menu')
const close = document.querySelector('.close')


burger.onclick = function() {
    console.log(1);
    burgerMenu.classList.add('add');

}

close.onclick = function(){
    console.log(2);
    burgerMenu.classList.remove('add');
}