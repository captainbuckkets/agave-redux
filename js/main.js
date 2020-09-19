// Login screen loaders
// Add event listeners to Sign In and New User tabs
var unit = "tPPC"
var explorer = "https://tblockbook.peercoin.net/"

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

// Check Statuses
function checkAgave() {
    // Need the stupid API to be online to test if its alive

    // Set Agave Status
    // Check Agave Status
    // document.getElementById("agaveStatus").innerHTML = '<div><img src="img/icons/Network2.svg"/></div>' + '<div> Agave: Online</div>'
                
}

function checkBlockbook() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    fetch("https://tblockbook.peercoin.net/api/", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("result", result)
            console.log("Blockbook Status", result.blockbook.inSync)
            if (result.blockbook.inSync == true) {
                // Set Blockbook Status
                document.getElementById("blockbookStatus").innerHTML = '<div><img src="img/icons/Network.svg"/></div>' + '<div> Blockbook: Online</div>'
                // Set Best Blockheight
                document.getElementById("bestBlockheight").innerText = 'Block Height: ' + result.blockbook.bestHeight
                // Set Last Block Time
                let blockTime = new Date(result.blockbook.lastBlockTime).toLocaleTimeString()
                document.getElementById("lastBlock").innerText = 'Last Block: ' + blockTime
            } else {
                document.getElementById("blockbookStatus").innerHTML = '<div><img src="img/icons/Network_offline.svg"/></div>' + '<div> Blockbook: ' + 'Offline</div>'
            }
        })
        .catch(error => console.log('error', error));
}

// Get Balance Function
function getBalance() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch("https://tblockbook.peercoin.net/api/address/mprgLWTLBpPrC15ikV2BLVP7gDRnoSuf7o", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("Balance", result.balance)
            var balance = result.balance
            document.getElementById("userInfoBalance").innerText = balance + " " + unit
        })
        .catch(error => console.log('error', error));
}

function loadWalletArea() {
    // Check Blockbook
    checkBlockbook()

    // Get Balance
    getBalance()

    // Hide the login area - maybe add an animation
    document.getElementById("loginArea").style.display = "none"
    // Show the card
    document.getElementById("canvas").style.display = "block"
    // Show the wallet area
    document.getElementById("navBar").style.display = "flex"
    // Add logout event listener
    document.getElementById("logoutDiv").addEventListener("click", logout)

    document.getElementById("walletDiv").style.display = "inline-flex"
    document.getElementById("overviewDiv").style.display = "grid"

   // Show our nav
    document.getElementById("walletNav").style.display = "inline"

    // Set event listeners
}

// Simpler parent tab click function
function loadPage(pageName, displayStyle) {
    // Hide all pages
    document.getElementById("overviewDiv").style.display = "none"
    document.getElementById("sendDiv").style.display = "none"
    document.getElementById("createDiv").style.display = "none"
    document.getElementById("transactionsDiv").style.display = "none"

    // Show the page
    document.getElementById(pageName).style.display = displayStyle

    // Find and remove the old active tag
    

    // Add new active tag
}

// Remove active tag
function removeActiveTag(newTag) {
    // Remove the Old tag
    document.getElementsByClassName("navActive")[0].classList.remove("navActive")

    // Add the New Tag
    document.getElementById(newTag).classList.add("navActive")
}

// Load Overview
function loadOverview() {
    // Hide other Divs
    // Add transitions here eventually
    document.getElementById("sendDiv").style.display = "none"
    document.getElementById("createDiv").style.display = "none"
    document.getElementById("transactionsDiv").style.display = "none"

    // Remove the Active Tag
    removeActiveTag("overviewTab")

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

    // Remove the Active Tag
    removeActiveTag("sendTab")

    // Show Send
    document.getElementById("sendDiv").style.display = "flex"
    // Show Send Help
    document.getElementById("sendHelp").style.display = "block"
}

// Load Create
function loadCreate() {
    // Hide other Divs
    // Add transitions here eventually
    document.getElementById("overviewDiv").style.display = "none"
    document.getElementById("sendDiv").style.display = "none"
    document.getElementById("transactionsDiv").style.display = "none"

    // Remove the Active Tag
    removeActiveTag("createTab")

    // Show Create
    document.getElementById("createDiv").style.display = "block"
    // Show Create Help
    document.getElementById("createHelp").style.display = "block"
}

// Load Transactions
function loadTransactions() {
    // Hide other Divs
    // Add transitions here eventually
    document.getElementById("overviewDiv").style.display = "none"
    document.getElementById("sendDiv").style.display = "none"
    document.getElementById("createDiv").style.display = "none"

    // Remove the Active Tag
    removeActiveTag("transactionsTab")

    // Show Create
    document.getElementById("transactionsDiv").style.display = "block"
}

// Logout function
function logout() {
    // Alert to make sure you want to log out
    var l = confirm("Are you sure you want to logout?")
    // Remove creds
    // Remove elements
}