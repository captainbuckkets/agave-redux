// .____                 .__        
// |    |    ____   ____ |__| ____  
// |    |   /  _ \ / ___\|  |/    \ 
// |    |__(  <_> ) /_/  >  |   |  \
// |_______ \____/\___  /|__|___|  /
//         \/    /_____/         \/ 

// All scripts for the ling page

// Show the loading screen
function loaderStart() {
    // Turn on the loader
    document.getElementById("loader").style.display = "flex"
}

function loaderStop() {
    // Turn off the loader
    document.getElementById("loader").style.display = "none" 
}

// Tab Swapping functions for login screen
function openLogin() {
    document.getElementById("newUserDiv").style.display = "none"
    document.getElementById("returningUserDiv").style.display = "block"
}

function openNewUser() {
    document.getElementById("returningUserDiv").style.display = "none"
    document.getElementById("newUserDiv").style.display = "block"
}

// Check if the login credentials are accepted and load the required information.  For now this is empty
function loginCheck() {
    console.log("Checking login")

    // var address = document.getElementById("")
    // Eventually this will have to be encoded and all that good stuff

    loadWalletArea()
}