const guidelinesTitle = document.getElementById('inner-recipe-title')
const guidelinesImg= document.getElementById ('recipeImage')
const fatInd = document.getElementById('fatInd')



switch (localStorage.getItem("selected")){
    case "SINIGANG":
        guidelinesTitle.innerHTML = localStorage.getItem("selected")
        guidelinesImg.src = "/img/Sinigang.jpg"
        fatInd.style.width = '60%'
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






