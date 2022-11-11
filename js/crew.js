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

//* TAB LIST
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]')

//* BUTTONS
const btnCommander = document.querySelector('[aria-controls="commander-tab"]')
const btnSpecialist = document.querySelector('[aria-controls="specialist-tab"]')
const btnPilot = document.querySelector('[aria-controls="pilot-tab"]')
const btnEngineer = document.querySelector('[aria-controls="engineer-tab"]')

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

//*-- PAGE CHANGE ON CLICK
const pageChange_click = (member) => {
    crewIndex = 0
    switch (member) {
        case 'commander':
            crewIndex = 0
            btnCommander.ariaSelected = true
            btnCommander.focus()
            btnSpecialist.ariaSelected = btnPilot.ariaSelected = btnEngineer.ariaSelected = false
            break
        case 'specialist':
            crewIndex = 1
            btnSpecialist.ariaSelected = true
            btnSpecialist.focus()
            btnCommander.ariaSelected = btnPilot.ariaSelected = btnEngineer.ariaSelected = false 
            break
        case 'pilot':
            crewIndex = 2
            btnPilot.ariaSelected = true
            btnPilot.focus()
            btnCommander.ariaSelected = btnEngineer.ariaSelected = btnSpecialist.ariaSelected = false  
            break
        case 'engineer':
            crewIndex = 3
            btnEngineer.ariaSelected = true
            btnEngineer.focus()
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


//*-- PAGE CHANGE ON KEY PRESS (KEYBOARD NAVIGATION)
const pageChange_keydown = (e) => {
    const arrowLeft = "ArrowLeft"
    const arrowRight = "ArrowRight"
    const keyPressed = e.key
    let currentTab = ''

    for (let i=0; i<tabs.length; i++) {
        tabs[i].setAttribute('tabindex', 1)
        if (tabs[i].ariaSelected === 'true') {
            currentTab = tabs[i]
            currentTab.setAttribute('tabindex', 2)
        }
    }

    if (keyPressed == arrowLeft) {
        if (!currentTab.previousElementSibling) {
            pageChange_click('engineer')
            return
        }

        switch (currentTab.previousElementSibling.innerText) {
            case "The Commander":
                pageChange_click('commander')
                return
            case "The Mission Specialist":
                pageChange_click('specialist')
                return
            case "The Pilot":
                pageChange_click('pilot')
        }
    }

    if (keyPressed == arrowRight) {
        if (!currentTab.nextElementSibling) {
            pageChange_click('commander')
            return
        }

        switch (currentTab.nextElementSibling.innerText) {
            case "The Mission Specialist":
                pageChange_click('specialist')
                return
            case "The Pilot":
                pageChange_click('pilot')
                return
            case "The Engineer":
                pageChange_click('engineer')
        }
    }
}

/*
~ ----------------------------------
~ CREW TABS -- FUNCTIONS ATTRIBUTIONS
~ ----------------------------------
*/


btnCommander.onclick = () => pageChange_click('commander')
btnSpecialist.onclick = () => pageChange_click('specialist')
btnPilot.onclick = () => pageChange_click('pilot')
btnEngineer.onclick = () => pageChange_click('engineer')
tabList.onkeydown = pageChange_keydown