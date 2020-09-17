// Login screen loaders
// Add event listeners to Sign In and New User tabs
function prepFunction() {
    var login = document.getElementById("loginTab")
    var newUsr = document.getElementById("newUserTab")

    // Add event listeners for swapping between login tabs
    login.addEventListener("click", openLogin)
    newUsr.addEventListener("click", openNewUser)
}

// Show the loading screen
function loaderStart() {
    // Turn on the loader
    document.getElementById("loader").style.display = "flex"
    setTimeout(loaderStop, 300)
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
    loadWalletArea()
}

function loadWalletArea() {
    // Hide the login area - maybe add an animation
    document.getElementById("loginArea").style.display = "none"
    // Show the wallet area
    document.getElementById("navBar").style.display = "inline-flex"
    document.getElementById("walletDiv").style.display = "inline-flex"
    document.getElementById("overviewDiv").style.display = "grid"
    // Show our nav
    document.getElementById("walletNav").style.display = "inline"

    // Set event listeners
}

// Load Overview
function loadOverview() {
    // Hide other Divs
    // Add transitions here eventually
    document.getElementById("sendDiv").style.display = "none"
    document.getElementById("createDiv").style.display = "none"
    document.getElementById("transactionsDiv").style.display = "none"

    // Show Overview
    document.getElementById("overviewDiv").style.display = "grid"
}

// Load Send 
function loadSend() {
    // Hide other Divs
    // Add transitions here eventually
    document.getElementById("overviewDiv").style.display = "none"
    document.getElementById("createDiv").style.display = "none"
    document.getElementById("transactionsDiv").style.display = "none"

    // Show Overview
    document.getElementById("sendDiv").style.display = "grid"
}

// Logout function
function logout() {
    // Alert to make sure you want to log out
    // Remove creds
    // Remove elements
}