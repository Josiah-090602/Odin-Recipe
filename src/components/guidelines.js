const textInd = document.getElementsByClassName('indicator-text')
const guidelinesTitle = document.getElementById('inner-recipe-title')
const guidelinesImg= document.getElementById ('recipeImage')
const fatInd = document.getElementById('fatInd')
const carbInd = document.getElementById('carbInd')
const sodInd = document.getElementById('sodInd')
const sugInd = document.getElementById('sugInd')
const fibInd = document.getElementById('fibInd')




switch (localStorage.getItem("selected")){
    case "SINIGANG":
        guidelinesTitle.innerHTML = localStorage.getItem("selected")
        guidelinesImg.src = "/img/Sinigang.jpg"
        fatInd.style.width = '69.85%'
        carbInd.style.width = '28.57%'
        sodInd.style.width = '3.88%'
        sugInd.style.width = '2.27%'
        fibInd.style.width = '2.8%'
        textInd[0].innerHTML = "46.8 / 67g"
        textInd[1].innerHTML = "9.7 / 250g"
        textInd[2].innerHTML = "657 / 2300mg"
        textInd[3].innerHTML = "1.7 / 75g"
        textInd[4].innerHTML = "0.7 / 25g"
        break
    case "HALO-HALO":
        guidelinesTitle.innerHTML = localStorage.getItem("selected")
        guidelinesImg.src = "/img/Halo-halo.jpg"
        fatInd.style.width = '4.93%'
        carbInd.style.width = '16.5%'
        sodInd.style.width = '1.83%'
        sugInd.style.width = '17.2%'
        fibInd.style.width = '3.6%'
        textInd[0].innerHTML = "3.3 / 67g"
        textInd[1].innerHTML = "16.5 / 250g"
        textInd[2].innerHTML = "42 / 2300mg"
        textInd[3].innerHTML = "12.9 / 75g"
        textInd[4].innerHTML = "0.9 / 25g"
        break
    case "MELONADE":
        guidelinesTitle.innerHTML = localStorage.getItem("selected")
        guidelinesImg.src = "/img/Melonade.jpg"
        fatInd.style.width = '0.75%'
        carbInd.style.width = '7.76%'
        sodInd.style.width = '3.0348%'
        sugInd.style.width = '24.93%'
        fibInd.style.width = '8.4%'
        textInd[0].innerHTML = "0.5 / 67g"
        textInd[1].innerHTML = "19.4 / 250g"
        textInd[2].innerHTML = "69.8 / 2300mg"
        textInd[3].innerHTML = "18.7 / 75g"
        textInd[4].innerHTML = "2.1 / 25g"
        break
    default:
        guidelinesTitle.innerHTML = localStorage.getItem("selected")
        guidelinesImg.src = "/img/Bulaklak.jpg"
        fatInd.style.width = '56.72%'
        carbInd.style.width = '2.4%'
        sodInd.style.width = '0%'
        sugInd.style.width = '0%'
        fibInd.style.width = '0%'
        textInd[0].innerHTML = "10 / 67g"
        textInd[1].innerHTML = "6/250g"
        textInd[2].innerHTML = "-- / 2300mg"
        textInd[3].innerHTML = "-- / 75g"
        textInd[4].innerHTML = "-- / 25g"
        break
}






