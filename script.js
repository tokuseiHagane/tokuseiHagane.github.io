function ToggleMenu(){
    const button = document.getElementById('burger')
    const menu = document.getElementById('menu-burger')
    var links = document.getElementsByClassName('nav-bar-a');

    button.classList.toggle('active')
    menu.classList.toggle('active')
    for(var i = 0; i < links.length; i++) {
         links[i].classList.toggle('active')
    }
}