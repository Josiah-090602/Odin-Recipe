const textInd = document.getElementsByClassName('indicator-text')
const guidelinesTitle = document.getElementById('inner-recipe-title')
const guidelinesImg= document.getElementById ('recipeImage')
const fatInd = document.getElementById('fatInd')
const carbInd = document.getElementById('carbInd')
const sodInd = document.getElementById('sodInd')
const sugInd = document.getElementById('sugInd')
const fibInd = document.getElementById('fibInd')

const cookingItems = [
    ["Arrange the ruffle fat, whole peppercorn, 2 tablespoons salt, and bay leaves in a cooking pot. Pour-in water. Let boil. Cover and then simmer for 1 hour.","Turn the heat off. Remove the boiled ruffle fat from the pot and then let the water drip-off.","Rub the remaining salt all over the ruffled fat. Set aside.","Meanwhile, heat the cooking oil in a deep fryer or a deep cooking pot.", "When the oil gets hot, slowly add-in the ruffled fat. Deep fry in low to medium heat until the texture becomes crisp and the color turns medium brown.", "Remove from the deep fryer or cooking pot. Arrange in a plate lined with paper towels to absorb the oil.", "Serve with spiced vinegar.", "Share and enjoy!"],
    ["Rinse pork ribs and drain well.", "In a pot over medium heat, combine pork and enough water to cover. Bring to a boil, skimming scum that accumulates on top.", "Once broth clears, add tomatoes, onion, and fish sauce. Lower heat and simmer for about 1 to 1 ½ hours or until meat is tender, adding more water as necessary to maintain about 8 cups", "Add gabi and cook for about 4 to 6 minutes or until tender.", "Add chili peppers and radish. Continue to simmer for about 2 to 3 minutes.", "Add long beans. Continue to cook for about 2 minutes.", "Add eggplant and okra and cook for another 1 to 2 minutes.", "If using packaged tamarind base, add to the pot and stir until completely dissolved.", "Season with salt and pepper to taste.","Add bok choy and continue to cook for about 1 minute. Serve hot."],
    ["Prepare the gulaman according to package directions. Use less water than called for to yield a firmer texture.", "Prepare the ingredients from scratch or use bottled halo-halo ingredients.", "In a tall glass, add about a teaspoon each of desired add-ins to about ⅓ full. ", "Pack the glass with shaved ice.", "Drizzle evaporated milk over the ice.", "Top the ice with leche flan and scoop of ice cream.", "Garnish with strips of macapuno and sprinkle with pinipig, if desired", "Serve immediately."], 
    ["Cut cantaloupe in half crosswise and with a spoon, scrape off seeds and inner pulp.","In a bowl, place seeds and pulp with one cup of the water, and mash with the back of a spoon to extract flavor. Using a colander, strain juice and discard seeds.","Hold the cantaloupe half firmly and shred flesh using a fruit shredder or the tines of a fork into thin strands.","In a pitcher, combine shredded melon, extracted juice from seeds, simple syrup, and the remaining 3 cups of water. Stir well and chill in the refrigerator until ready to serve"]
]

switch (localStorage.getItem("selected")){
    case "SINIGANG":
        //change nutrition information 
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

        //create guideline list item
        for (let i = 0; i < cookingItems[1].length; i++){
            const item = document.createElement("li")
            const itemContent = document.createTextNode(cookingItems[1][i])

            item.appendChild(itemContent)

            document.getElementById("guidelineList").appendChild(item)
        }
        break
    case "HALO-HALO":
        //change nutrition information 
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

        //create guideline list item
        for (let i = 0; i < cookingItems[2].length; i++){
            const item = document.createElement("li")
            const itemContent = document.createTextNode(cookingItems[2][i])

            item.appendChild(itemContent)

            document.getElementById("guidelineList").appendChild(item)
        }
        break
    case "MELONADE":
        //change nutrition information 
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

        //create guideline list item
        for (let i = 0; i < cookingItems[3].length; i++){
            const item = document.createElement("li")
            const itemContent = document.createTextNode(cookingItems[3][i])

            item.appendChild(itemContent)

            document.getElementById("guidelineList").appendChild(item)
        }
        break
    default:
        //change nutrition information 
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

        //create guideline list item
        for (let i = 0; i < cookingItems[0].length; i++){
            const item = document.createElement("li")
            const itemContent = document.createTextNode(cookingItems[0][i])

            item.appendChild(itemContent)

            document.getElementById("guidelineList").appendChild(item)
        }

        break
}












