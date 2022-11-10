//!LOAD JSON DATA

function jsonify(response) {
    return response.json()
}

function showError() {
    console.log('Página não encontrada!')
}

window.onload = async () => {
    const dados = await fetch("../data.json")
        .then(jsonify)
        .catch()

        planets = dados.destinations
}

/*
~ ----------------------------------
~ DESTINATION TABS -- CACHE ELEMENTS
~ ----------------------------------
*/


//* BUTTONS
const btnMoon = document.getElementById('btn-moon')
const btnMars = document.getElementById('btn-mars')
const btnEuropa = document.getElementById('btn-europa')
const btnTitan = document.getElementById('btn-titan')

//* IMAGES
const imgWebp = document.getElementById('webp-image')
const imgPng = document.getElementById('png-image')

//* PLANETS
const destName = document.getElementById('destination-name')
const destDescription = document.getElementById('destination-description')
const distance = document.getElementById('avg-distance')
const travelTime = document.getElementById('travel-time')


/*
~ ----------------------------------
~ DESTINATION TABS -- BUTTON FUNCTIONS
~ ----------------------------------
*/

//*-- MOON
const btnMoon_click = () => {
    // Button States
    btnMoon.ariaSelected = true
    btnMars.ariaSelected = false
    btnEuropa.ariaSelected = false
    btnTitan.ariaSelected = false

    // Destination details
    destName.innerText = planets[0].name
    destDescription.innerText = planets[0].description
    distance.innerText = planets[0].distance
    travelTime.innerText = planets[0].travel

    // Images
    imgWebp.srcset = planets[0].images.webp
    imgPng.src = planets[0].images.png
}

//*-- MARS
const btnMars_click = () => {
    // Button States
    btnMoon.ariaSelected = false
    btnMars.ariaSelected = true
    btnEuropa.ariaSelected = false
    btnTitan.ariaSelected = false

    // Destination details
    destName.innerText = planets[1].name
    destDescription.innerText = planets[1].description
    distance.innerText = planets[1].distance
    travelTime.innerText = planets[1].travel

    // Images
    imgWebp.srcset = planets[1].images.webp
    imgPng.src = planets[1].images.png
}

//*-- EUROPA
const btnEuropa_click = () => {
    // Button States
    btnMoon.ariaSelected = false
    btnMars.ariaSelected = false
    btnEuropa.ariaSelected = true
    btnTitan.ariaSelected = false

    // Destination details
    destName.innerText = planets[2].name
    destDescription.innerText = planets[2].description
    distance.innerText = planets[2].distance
    travelTime.innerText = planets[2].travel

    // Images
    imgWebp.srcset = planets[2].images.webp
    imgPng.src = planets[2].images.png
}

//*-- TITAN
const btnTitan_click = () => {
    // Button States
    btnMoon.ariaSelected = false
    btnMars.ariaSelected = false
    btnEuropa.ariaSelected = false
    btnTitan.ariaSelected = true

    // Destination details
    destName.innerText = planets[3].name
    destDescription.innerText = planets[3].description
    distance.innerText = planets[3].distance
    travelTime.innerText = planets[3].travel

    // Images
    imgWebp.srcset = planets[3].images.webp
    imgPng.src = planets[3].images.png
}

/*
~ ----------------------------------
~ DESTINATION TABS -- FUNCTIONS ATTRIBUTIONS
~ ----------------------------------
*/

btnMoon.onclick = btnMoon_click
btnMars.onclick = btnMars_click
btnEuropa.onclick = btnEuropa_click
btnTitan.onclick = btnTitan_click