//!LOAD JSON DATA

function jsonify(response) {
    return response.json()
}

function showError() {
    console.log('Página não encontrada!')
}

window.onload = async () => {
    const dados = await fetch("./data.json")
        .then(jsonify)
        .catch(showError)

        technology = dados.technology
        console.log(technology)
}

/*
~ ----------------------------------
~ TECH TABS -- CACHE ELEMENTS
~ ----------------------------------
*/

//* TAB LIST
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]')

//* BUTTONS
const btnLauncher = document.querySelector('[aria-controls="launch-tab"]')
const btnCapsule = document.querySelector('[aria-controls="capsule-tab"]')
const btnSpaceport = document.querySelector('[aria-controls="spaceport-tab"]')

//* IMAGES
const techImage = document.getElementById('tech-image')

//* TECH
const techName = document.getElementById('tech-name')
const techDetails = document.getElementById('tech-details')



/*
~ ----------------------------------
~ WINDOWS RESIZE FUNCTION
~ ----------------------------------
*/

window.onresize = () => {
    let techIndex = -1
    if (btnLauncher.ariaSelected == 'true') {
        techIndex = 0
    }

    if (btnSpaceport.ariaSelected == 'true') {
        techIndex = 1
    }

    if (btnCapsule.ariaSelected == 'true') {
        techIndex = 2
    } 

    if (window.matchMedia("(min-width: 51em)").matches) {
        techImage.src = technology[techIndex].images.portrait
    } else {
        techImage.src = technology[techIndex].images.landscape
    }
}

/*
~ ----------------------------------
~ TECH TABS -- BUTTON FUNCTIONS
~ ----------------------------------
*/

//*-- PAGE CHANGE ON CLICK
const pageChange_click = (tech) => {
    let techIndex = 0
    switch (tech) {
        case 'launcher':
            techIndex = 0
            btnLauncher.ariaSelected = true
            btnLauncher.focus()
            btnCapsule.ariaSelected = btnSpaceport.ariaSelected = false
            break
        case 'spaceport':
            techIndex = 1
            btnSpaceport.ariaSelected = true
            btnSpaceport.focus()
            btnLauncher.ariaSelected = btnCapsule.ariaSelected = false
            break
        case 'capsule':
            techIndex = 2
            btnCapsule.ariaSelected = true
            btnCapsule.focus()
            btnLauncher.ariaSelected = btnSpaceport.ariaSelected = false         
    }
    // console.log(technology[techIndex].images.landscape)

    // Crew Details
    techName.innerText = technology[techIndex].name
    techDetails.innerText = technology[techIndex].description

    // Images
    if (window.matchMedia("(min-width: 51em)").matches) {
        techImage.src = technology[techIndex].images.portrait
    } else {
        techImage.src = technology[techIndex].images.landscape
    }
    
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
            pageChange_click('capsule')
            return
        }

        switch (currentTab.previousElementSibling.innerText) {
            case "Numbered buttons\n1":
                pageChange_click('launcher')
                break
            case "Numbered buttons\n2":
                pageChange_click('spaceport')
        }
    }

    if (keyPressed == arrowRight) {
        if (!currentTab.nextElementSibling) {
            pageChange_click('launcher')
            return
        }

        switch (currentTab.nextElementSibling.innerText) {
            case "Numbered buttons\n2":
                pageChange_click('spaceport')
                break
            case "Numbered buttons\n3":
                pageChange_click('capsule')
        }
    }
}

/*
~ ----------------------------------
~ CREW TABS -- FUNCTION ATTRIBUTIONS
~ ----------------------------------
*/

btnLauncher.onclick = () => pageChange_click('launcher')
btnCapsule.onclick = () => pageChange_click('capsule')
btnSpaceport.onclick = () => pageChange_click('spaceport')
tabList.onkeydown = pageChange_keydown