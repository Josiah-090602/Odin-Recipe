const guidelinesTitle = document.getElementById('inner-recipe-title')
const guidelinesImg= document.getElementById ('recipeImage')



switch (localStorage.getItem("selected")){
    case "SINIGANG":
        guidelinesTitle.innerHTML = localStorage.getItem("selected")
        guidelinesImg.src = "/img/Sinigang.jpg"
        break
    case "HALO-HALO":
        guidelinesTitle.innerHTML = localStorage.getItem("selected")
        guidelinesImg.src = "/img/Halo-halo.jpg"
        break
    case "MELONADE":
        guidelinesTitle.innerHTML = localStorage.getItem("selected")
        guidelinesImg.src = "/img/Melonade.jpg"
        break
    default:
        guidelinesTitle.innerHTML = localStorage.getItem("selected")
        guidelinesImg.src = "/img/Bulaklak.jpg"
        break
}






