const header = document.getElementById('menu-section')
const menuLink = header.getElementsByClassName('menu-btn')


for (let i = 0; i < menuLink.length; i++){
    menuLink[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("active")

        current[0].className = current[0].className.replace
        ("active","")
        this.className += " active"
        changeContent()
    })    
}

function changeContent (){
    const menus = document.getElementsByClassName('menu-btn')
    const contentOrigin = document.getElementById('origin')
    const contentCategory = document.getElementById('category')
    const contentImg = document.getElementById('content-image')

    if (menus[1].classList.contains('active')){
        contentImg.src = "/img/Sinigang.jpg"
        contentOrigin.innerHTML = "Sinigang is a traditional Filipino dish that is known for its sour and savory taste. It's a hearty soup made by cooking meat or seafood in a tamarind-based broth with vegetables like tomatoes, onions, and eggplant. It's a beloved dish that has been enjoyed by Filipinos for generations and is now a staple in Filipino households and restaurants all over the world.The origins of Sinigang are a bit hazy, but it's believed to have originated in the Philippines during the pre-colonial era. The indigenous people of the Philippines have been using tamarind as a souring agent for their dishes for centuries. It's likely that the dish evolved over time, with different regions and ethnic groups putting their own spin on it. Sinigang became more popular in the 20th century, as it was brought to Manila and other cities by migrants from the provinces. It's now considered a national dish of the Philippines and can be found in Filipino restaurants all over the world."
        contentCategory.innerHTML = "Dish"
    }else {
        contentImg.src = "/img/Halo-halo.jpg"
        contentOrigin.innerHTML = "Halo halo is perhaps the most iconic dessert in the Philippines with its colorful presentation of shaved ice, milk, fruits, nuts, beans, gelatins, and more. In fact, the basic list of toppings includes red beans, coconut, jackfruit, banana, ube paste, ube ice cream, leche flan, and toasted rice. Once served, admired, and photographed, it’s time to halo halo – mix mix! Shortly after the Spanish rule over the country ended, Americans came in and took charge. In 1902, they constructed Manila’s Insular Ice Plant which introduced ice and frozen storage to the country. Around that same time, Japanese immigrants were able to make and enjoy their kakigori by topping shaved ice with local sweetened beans called monggo with sugar and milk.This kakigori variation slowly adapted to make this cold dessert truly Filipino using all its past influences mixed together. Japanese sweet beans, Spain’s (or Mexico’s, really) leche flan, and American ice. Add in local color and flavors from fruits. Halo halo, or mix mix, and you’ve blended together the Filipino culture."
        contentCategory.innerHTML = "Dessert"
    }
}