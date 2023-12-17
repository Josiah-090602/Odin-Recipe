let menuLink = document.querySelectorAll('.menu-link')


menuLink.forEach( menu => {
    menu.addEventListener("click", _e => {
        removeActive()
        menu.classList.add('active')
    })
})

const removeActive = () => {
    menuLink.forEach( menu => {
        menu.classList.remove('active')
    })
}