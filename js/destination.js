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

//* TAB LIST
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]')

//* BUTTONS
const btnMoon = document.querySelector('[aria-controls="moon-tab"]')
const btnMars = document.querySelector('[aria-controls="mars-tab"]')
const btnEuropa = document.querySelector('[aria-controls="europa-tab"]')
const btnTitan = document.querySelector('[aria-controls="titan-tab"]')

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

//*-- PAGE CHANGE ON CLICK
const pageChange_click = (destination) => {
    let destIndex = 0
    switch (destination) {
        case 'moon':
            destIndex = 0
            btnMoon.ariaSelected = true
            btnMoon.focus()
            btnMars.ariaSelected = btnEuropa.ariaSelected = btnTitan.ariaSelected = false
            break
        case 'mars':
            destIndex = 1
            btnMars.ariaSelected = true
            btnMars.focus()
            btnMoon.ariaSelected = btnEuropa.ariaSelected = btnTitan.ariaSelected = false
            break
        case 'europa':
            destIndex = 2
            btnEuropa.ariaSelected = true
            btnEuropa.focus()
            btnTitan.ariaSelected = btnMars.ariaSelected = btnMoon.ariaSelected = false
            break
        case 'titan':
            destIndex = 3
            btnTitan.ariaSelected = true
            btnTitan.focus()
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


//*-- PAGE CHANGE ON KEY DOWN (KEYBOARD NAVIGATION)
const pageChange_keydown = (e) => {
    const arrowLeft = "ArrowLeft"
    const arrowRight = "ArrowRight"
    const keyPressed = e.key
    let currentTab = ''

    for (let i=0; i<tabs.length; i++) {
        tabs[i].setAttribute("tabindex", 1)
        if (tabs[i].ariaSelected === 'true') {
            currentTab = tabs[i]
            currentTab.setAttribute("tabindex", 2)
        }
    }

    if (keyPressed == arrowLeft) {
        if (!currentTab.previousElementSibling) {
            pageChange_click('titan')
            return
        }
        switch (currentTab.previousElementSibling.innerText) {
            case "MOON":
                pageChange_click('moon')
                return
            case "MARS":
                pageChange_click('mars')
                return
            case "EUROPA":
                pageChange_click('europa')
        }
    }

    if (keyPressed == arrowRight) {
        if (!currentTab.nextElementSibling) {
            pageChange_click('moon')
            return
        }

        switch (currentTab.nextElementSibling.innerText) {
            case "MARS":
                pageChange_click('mars')
                return
            case "EUROPA":
                pageChange_click('europa')
                return
            case "TITAN":
                pageChange_click('titan')
        }
    }
}


/*
~ ----------------------------------
~ DESTINATION TABS -- FUNCTIONS ATTRIBUTIONS
~ ----------------------------------
*/

btnMoon.onclick = () => pageChange_click('moon')
btnMars.onclick = () => pageChange_click('mars')
btnEuropa.onclick = () => pageChange_click('europa')
btnTitan.onclick = () => pageChange_click('titan')
tabList.onkeydown = pageChange_keydown
