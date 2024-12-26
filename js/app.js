function toggleMenu() {
    const hamburger = document.querySelector('#mobile img');
    const menu = document.querySelector('#mobile img');
    
    // Переключаем класс 'open' у гамбургера
    hamburger.classList.toggle('opened');
    menu.classList.toggle('opened');
}