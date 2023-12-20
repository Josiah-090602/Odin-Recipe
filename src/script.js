const header = document.getElementById('menu-section')
const menuLink = header.getElementsByClassName('menu-btn')


for (let i = 0; i < menuLink.length; i++){
    menuLink[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("active")
        current[0].className = current[0].className.replace("active","")
        this.className += " active"
    })    
}


const menus = [document.querySelectorAll('.menu-btn')]
const dataContent = []
dataContent[0] = "Bulaklak"
dataContent[1] = "Sinigang"
dataContent[2] = "Halo-halo"

console.log (menus)

function changeContent () {
    if (menuLink.classList.contain){
        console.log (dataContent[0])
    }else if(menus[1] = "button.menu-btn.active"){
        console.log (dataContent[1])
    }else if(menus[2] = "button.menu-btn.active"){
        console.log (dataContent[2])
    }
    
}
