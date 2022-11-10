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

        crew = dados.crew
}

/*
~ ----------------------------------
~ CREW TABS -- CACHE ELEMENTS
~ ----------------------------------
*/

//* BUTTONS
const btnCommander = document.getElementById('btn-commander')
const btnSpecialist = document.getElementById('btn-specialist')
const btnPilot = document.getElementById('btn-pilot')
const btnEngineer = document.getElementById('btn-engineer')

//* IMAGES
const imgWebp = document.getElementById('webp-image')
const imgPng = document.getElementById('png-image')

//* CREW
const crewRole = document.getElementById('crew-role')
const crewName = document.getElementById('crew-name')
const crewDetails = document.getElementById('crew-details')

/*
~ ----------------------------------
~ CREW TABS -- BUTTON FUNCTIONS
~ ----------------------------------
*/

//*-- THE COMMANDER
const btnCommander_click = () => {
    // Button States
    btnCommander.ariaSelected = true
    btnSpecialist.ariaSelected = false
    btnPilot.ariaSelected = false
    btnEngineer.ariaSelected = false

    // Crew Details
    crewRole.innerText = crew[0].role
    crewName.innerText = crew[0].name
    crewDetails.innerText = crew[0].bio

    // Images
    imgWebp.srcset = crew[0].images.webp
    imgPng.src = crew[0].images.png
}


//*-- THE SPECIALIST
const btnSpecialist_click = () => {
    // Button States
    btnCommander.ariaSelected = false
    btnSpecialist.ariaSelected = true
    btnPilot.ariaSelected = false
    btnEngineer.ariaSelected = false

    // Crew Details
    crewRole.innerText = crew[1].role
    crewName.innerText = crew[1].name
    crewDetails.innerText = crew[1].bio

    // Images
    imgWebp.srcset = crew[1].images.webp
    imgPng.src = crew[1].images.png
}

//*-- THE PILOT
const btnPilot_click = () => {
    // Button States
    btnCommander.ariaSelected = false
    btnSpecialist.ariaSelected = false
    btnPilot.ariaSelected = true
    btnEngineer.ariaSelected = false

    // Crew Details
    crewRole.innerText = crew[2].role
    crewName.innerText = crew[2].name
    crewDetails.innerText = crew[2].bio

    // Images
    imgWebp.srcset = crew[2].images.webp
    imgPng.src = crew[2].images.png
}

//*-- THE ENGINEER
const btnEngineer_click = () => {
    // Button States
    btnCommander.ariaSelected = false
    btnSpecialist.ariaSelected = false
    btnPilot.ariaSelected = false
    btnEngineer.ariaSelected = true

    // Crew Details
    crewRole.innerText = crew[3].role
    crewName.innerText = crew[3].name
    crewDetails.innerText = crew[3].bio

    // Images
    imgWebp.srcset = crew[3].images.webp
    imgPng.src = crew[3].images.png
}



/*
~ ----------------------------------
~ CREW TABS -- FUNCTIONS ATTRIBUTIONS
~ ----------------------------------
*/

btnCommander.onclick = btnCommander_click
btnSpecialist.onclick = btnSpecialist_click
btnPilot.onclick = btnPilot_click
btnEngineer.onclick = btnEngineer_click