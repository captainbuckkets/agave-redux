//  _____                _ 
//  /  ___|              | |
//  \ `--.  ___ _ __   __| |
//   `--. \/ _ \ '_ \ / _` |
//  /\__/ /  __/ | | | (_| |
//  \____/ \___|_| |_|\__,_|
                         
// All scripts for the send page

// SEND VAliDATOR SCRIPTS

// SEND CONFIRMATION FORM SCRIPTS
function sendChecker() {
    // Variables
    var address = document.getElementById("sendReceivingAddress").value
    var amount = document.getElementById("sendAmount").value

    console.log(address.length)
    console.log(amount)

    if (address.length == 34 && amount > 0) {
        openConfirmSend()
    }
}

// Open Confirmation Form 
function openConfirmSend() {
    // Get our data
    var address = document.getElementById("sendReceivingAddress").value
    var asset = document.getElementById("sendAsset").value
    var amount = document.getElementById("sendAmount").value

    // Fill the confirmation form
    // Address
    document.getElementById("receivingAddressConfirmSend").innerHTML = address
    // Asset
    document.getElementById("assetConfirmSend").innerHTML = asset
    // Amount
    document.getElementById("amountConfirmSend").innerHTML = amount
    // Open the confirmation form
    document.getElementById("confirmTransactionSend").style.display = "flex"

}

// Close Confirmation Form
function cancelSendTransaction() {
    document.getElementById("confirmTransactionSend").style.display = "none"
}
 