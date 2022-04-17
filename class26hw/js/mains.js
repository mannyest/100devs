//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value.trim()

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks[0])
            let drinkName = data.drinks[0].strDrink
            let drinkImg = data.drinks[0].strDrinkThumb
            let drinkInst = data.drinks[0].strInstructions
            document.querySelector('h2').innerText = drinkName
            document.querySelector('img').src = drinkImg
            document.querySelector('h3').innerText = drinkInst
            })
        .catch(err => {
            console.log(`houston we got an error: ${err}`)
        })

}

