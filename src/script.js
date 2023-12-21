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

const recipeContent = {
    recipe1:["/img/Bulaklak.jpg","Chicharon Bulaklak is believed to originate from the province of Ilocos, which is commonly called “silit”. It is a pork ruffle that serves as a wall to hold the small intestine in place. Despite its name, it is actually not cooked using flowers; rather, it is named “bulaklak” (flower) because of its flower-like appearance after it is cooked. Chicharon bulaklak is a favorite of many Filipinos, and it is often consumed with alcoholic drinks and is best eaten when dipped in spicy vinegar.It is a popular dish that is deep-fried until golden brown and served warm and extra crispy.","Appetizer","Ruffle fat, Whole peppercorn, Dried bay leaves, Sea salt, Canola oil, Water"],

    recipe2:["/img/Sinigang.jpg","Sinigang is a traditional Filipino dish that is known for its sour and savory taste. It's a hearty soup made by cooking meat or seafood in a tamarind-based broth with vegetables like tomatoes, onions, and eggplant. It's a beloved dish that has been enjoyed by Filipinos for generations and is now a staple in Filipino households and restaurants all over the world.The origins of Sinigang are a bit hazy, but it's believed to have originated in the Philippines during the pre-colonial era. The indigenous people of the Philippines have been using tamarind as a souring agent for their dishes for centuries. It's likely that the dish evolved over time, with different regions and ethnic groups putting their own spin on it. Sinigang became more popular in the 20th century, as it was brought to Manila and other cities by migrants from the provinces. It's now considered a national dish of the Philippines and can be found in Filipino restaurants all over the world.","Dish","Pork belly or buto-buto, Spinach or Kang-kong, Fish sauce, String beans sitaw, Tomato, Chili or Banana pepper, Cooking oil, Water, Onion, Taro gabi, Sinigang mix good for 2 liters water"],
    
    recipe3:["/img/Halo-halo.jpg","Halo halo is perhaps the most iconic dessert in the Philippines with its colorful presentation of shaved ice, milk, fruits, nuts, beans, gelatins, and more. In fact, the basic list of toppings includes red beans, coconut, jackfruit, banana, ube paste, ube ice cream, leche flan, and toasted rice. Once served, admired, and photographed, it’s time to halo halo – mix mix! Shortly after the Spanish rule over the country ended, Americans came in and took charge. In 1902, they constructed Manila’s Insular Ice Plant which introduced ice and frozen storage to the country. Around that same time, Japanese immigrants were able to make and enjoy their kakigori by topping shaved ice with local sweetened beans called monggo with sugar and milk.This kakigori variation slowly adapted to make this cold dessert truly Filipino using all its past influences mixed together. Japanese sweet beans, Spain’s (or Mexico’s, really) leche flan, and American ice.","Dessert","Crushed or Shaved ice, Milk (fresh or evaporated), Sugar(Optional), Sweetened saba or Plantain bananas, Sweetened sweet potatoes, Fresh or Sweetened langka (jack fruit), Sweetened garbanzos or beans, Coconut strips or sweetened macapuno, Sweetened red munggo, Nata de coco (coconut gel), Sago or tapioca Pearls or Jelly cut into cubes, Pinipig, Leche flan(topping),Ube jam or ube ice cream (topping)"],

}

function changeContent (){
    const menus = document.getElementsByClassName('menu-btn')
    const contentOrigin = document.getElementById('origin')
    const contentCategory = document.getElementById('category')
    const contentImg = document.getElementById('content-image')
    const contentIngred = document.getElementById('ingredients')

    if (menus[1].classList.contains('active')){
        contentImg.src = recipeContent.recipe2[0]
        contentOrigin.innerHTML = recipeContent.recipe2[1]
        contentCategory.innerHTML = recipeContent.recipe2[2]
        contentIngred.innerHTML = recipeContent.recipe2[3]
    }else if (menus[2].classList.contains('active')){
        contentImg.src = recipeContent.recipe3[0]
        contentOrigin.innerHTML = recipeContent.recipe3[1]
        contentCategory.innerHTML = recipeContent.recipe3[2]
        contentIngred.innerHTML = recipeContent.recipe3[3]
    }else{
        contentImg.src =  recipeContent.recipe1[0]
        contentOrigin.innerHTML = recipeContent.recipe1[1]
        contentCategory.innerHTML = recipeContent.recipe1[2]
        contentIngred.innerHTML = recipeContent.recipe1[3]
    }
}