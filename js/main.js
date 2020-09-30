var transactionsTest = `[
    {
        "amount": 1100,
        "block_height": 445495,
        "card_id": "81b4e897bd7098849728b4d9c4b22af4bd074ee4074b1662db88f5d687c53551",
        "card_index": 0,
        "data": null,
        "deck_id": "0113120768c52857f2d400d35da2dd896a9d4ad74e1ae9f4b23d52b8acb34eaa",
        "receiver": "mgYMis9wpPe4uCA8oNcAJvhCPrhkqPNayg",
        "sender": "mgYMis9wpPe4uCA8oNcAJvhCPrhkqPNayg",
        "tx_index": 35,
        "type": "send"
    },
    {
        "amount": 1000,
        "block_height": 445495,
        "card_id": "35070db717cfeddd40726c4734ba502b2e7caee8a1d377739edf6f82f68db4af",
        "card_index": 0,
        "data": null,
        "deck_id": "2e643dfe2a21ce8b41a81d9f7f469cdadc029328fd3a25f324fe61f9cf395cdd",
        "receiver": "mgYMis9wpPe4uCA8oNcAJvhCPrhkqPNayg",
        "sender": "mgYMis9wpPe4uCA8oNcAJvhCPrhkqPNayg",
        "tx_index": 33,
        "type": "send"
    },
    {
        "amount": 1000,
        "block_height": 445495,
        "card_id": "e1e76936eb24a883d7bfe74f11c022c17dc9f8f8b691588a2a763803e26dd767",
        "card_index": 0,
        "data": null,
        "deck_id": "8a04443c655b65a060ce4f3bc99292953015fbf6651d15c80d4fbb3ee9fbc443",
        "receiver": "mgYMis9wpPe4uCA8oNcAJvhCPrhkqPNayg",
        "sender": "mgYMis9wpPe4uCA8oNcAJvhCPrhkqPNayg",
        "tx_index": 8,
        "type": "send"
    },
    {
        "amount": 1100,
        "block_height": 445495,
        "card_id": "81b4e897bd7098849728b4d9c4b22af4bd074ee4074b1662db88f5d687c53551",
        "card_index": 0,
        "data": null,
        "deck_id": "0113120768c52857f2d400d35da2dd896a9d4ad74e1ae9f4b23d52b8acb34eaa",
        "receiver": "mgYMis9wpPe4uCA8oNcAJvhCPrhkqPNayg",
        "sender": "mgYMis9wpPe4uCA8oNcAJvhCPrhkqPNayg",
        "tx_index": 35,
        "type": "send"
    },
    {
        "amount": 1000,
        "block_height": 445495,
        "card_id": "35070db717cfeddd40726c4734ba502b2e7caee8a1d377739edf6f82f68db4af",
        "card_index": 0,
        "data": null,
        "deck_id": "2e643dfe2a21ce8b41a81d9f7f469cdadc029328fd3a25f324fe61f9cf395cdd",
        "receiver": "mgYMis9wpPe4uCA8oNcAJvhCPrhkqPNayg",
        "sender": "mgYMis9wpPe4uCA8oNcAJvhCPrhkqPNayg",
        "tx_index": 33,
        "type": "send"
    },
    {
        "amount": 1000,
        "block_height": 445495,
        "card_id": "e1e76936eb24a883d7bfe74f11c022c17dc9f8f8b691588a2a763803e26dd767",
        "card_index": 0,
        "data": null,
        "deck_id": "8a04443c655b65a060ce4f3bc99292953015fbf6651d15c80d4fbb3ee9fbc443",
        "receiver": "mgYMis9wpPe4uCA8oNcAJvhCPrhkqPNayg",
        "sender": "mgYMis9wpPe4uCA8oNcAJvhCPrhkqPNayg",
        "tx_index": 8,
        "type": "send"
    }
]`

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
    
    fetch("https://tblockbook.peercoin.net/api/address/mgYMis9wpPe4uCA8oNcAJvhCPrhkqPNayg", requestOptions)
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



// Logout function
function logout() {
    // Alert to make sure you want to log out
    var l = confirm("Are you sure you want to logout?")
    // Remove creds
    // Remove elements
}

