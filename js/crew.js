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

//*-- PAGE CHANGE
const pageChange = (member) => {
    crewIndex = 0
    switch (member) {
        case 'commander':
            crewIndex = 0
            btnCommander.ariaSelected = true
            btnSpecialist.ariaSelected = btnPilot.ariaSelected = btnEngineer.ariaSelected = false
            break
        case 'specialist':
            crewIndex = 1
            btnSpecialist.ariaSelected = true
            btnCommander.ariaSelected = btnPilot.ariaSelected = btnEngineer.ariaSelected = false 
            break
        case 'pilot':
            crewIndex = 2
            btnPilot.ariaSelected = true
            btnCommander.ariaSelected = btnEngineer.ariaSelected = btnSpecialist.ariaSelected = false  
            break
        case 'engineer':
            crewIndex = 3
            btnEngineer.ariaSelected = true
            btnCommander.ariaSelected = btnSpecialist.ariaSelected = btnPilot.ariaSelected = false       
    }

    // Crew Details
    crewRole.innerText = crew[crewIndex].role
    crewName.innerText = crew[crewIndex].name
    crewDetails.innerText = crew[crewIndex].bio

    // Images
    imgWebp.srcset = crew[crewIndex].images.webp
    imgPng.src = crew[crewIndex].images.png
}


/*
~ ----------------------------------
~ CREW TABS -- FUNCTIONS ATTRIBUTIONS
~ ----------------------------------
*/

btnCommander.onclick = () => pageChange('commander')
btnSpecialist.onclick = () => pageChange('specialist')
btnPilot.onclick = () => pageChange('pilot')
btnEngineer.onclick = () => pageChange('engineer')