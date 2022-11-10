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

//*-- PAGE CHANGE
const pageChange = (destination) => {
    let destIndex = 0
    switch (destination) {
        case 'moon':
            destIndex = 0
            btnMoon.ariaSelected = true
            btnMars.ariaSelected = btnEuropa.ariaSelected = btnTitan.ariaSelected = false
            break
        case 'mars':
            destIndex = 1
            btnMars.ariaSelected = true
            btnMoon.ariaSelected = btnEuropa.ariaSelected = btnTitan.ariaSelected = false
            break
        case 'europa':
            destIndex = 2
            btnEuropa.ariaSelected = true
            btnTitan.ariaSelected = btnMars.ariaSelected = btnMoon.ariaSelected = false
            break
        case 'titan':
            destIndex = 3
            btnTitan.ariaSelected = true
            btnMoon.ariaSelected = btnMars.ariaSelected = btnEuropa.ariaSelected = false            
    }

    // Destination details
    destName.innerText = planets[destIndex].name
    destDescription.innerText = planets[destIndex].description
    distance.innerText = planets[destIndex].distance
    travelTime.innerText = planets[destIndex].travel

    // Images
    imgWebp.srcset = planets[destIndex].images.webp
    imgPng.src = planets[destIndex].images.png
}


/*
~ ----------------------------------
~ DESTINATION TABS -- FUNCTIONS ATTRIBUTIONS
~ ----------------------------------
*/

btnMoon.onclick = () => pageChange('moon')
btnMars.onclick = () => pageChange('mars')
btnEuropa.onclick = () => pageChange('europa')
btnTitan.onclick = () => pageChange('titan')