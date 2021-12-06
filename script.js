function ToggleMenu(){
    const button = document.getElementById('burger')
    const menu = document.getElementById('menu-burger')


    button.classList.toggle('active')
    menu.classList.toggle('active')
    
}