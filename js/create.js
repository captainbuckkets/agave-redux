//  _____                _       
//  /  __ \              | |      
//  | /  \/_ __ ___  __ _| |_ ___ 
//  | |   | '__/ _ \/ _` | __/ _ \
//  | \__/\ | |  __/ (_| | ||  __/
//   \____/_|  \___|\__,_|\__\___|
                               
// All scripts for the create page

// CREATE VALIDATOR SCRIPTS
function createChecker() {
    // Variables
    var name = document.getElementById("createDeckName").value
    var decimals = document.getElementById("createDeckDecimals").value

    // Check if the Name and Decimals are valid
    if (name.length > 0 && (decimals >= 0 && decimals <= 8)) {
        openConfirmCreate()
    }
}

// CREATE CONFIRMATION FORM SCRIPTS

// Open Confirmation Form
function openConfirmCreate() {
    // Get our data
    var name = document.getElementById("createDeckName").value
    var mode = document.getElementById("createIssueModeSelect").value
    var decimals = document.getElementById("createDeckDecimals").value
    var asd = document.getElementById("createASD").value


    // Fill the confirmation forms
    // Fill deck name
    document.getElementById("deckNameConfirmCreate").innerHTML = name
    // Fill mode
    document.getElementById("issueModeConfirmCreate").innerHTML = mode
    // Fill amount
    document.getElementById("decimalPlaceConfirmCreate").innerHTML = decimals
    // Fill ASD
    document.getElementById("aSDConfirmCreate").innerHTML = asd

    // Open the confirmation form
    document.getElementById("confirmTransactionCreate").style.display = "flex"
}

// Close Confirmation Form
function cancelCreateTransaction() {
    document.getElementById("confirmTransactionCreate").style.display = "none"
}

