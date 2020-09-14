
// Check if the login credentials are accepted and load the required information.  For now this is empty
function loginCheck() {
    console.log("Checking login")
    loadWalletArea()
}

function loadWalletArea() {
    // Hide the login area - maybe add an animation
    document.getElementById("loginArea").style.display = "none"
    // Show the wallet area
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