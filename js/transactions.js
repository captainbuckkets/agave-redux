//  _____                              _   _                 
//  |_   _|                            | | (_)                
//    | |_ __ __ _ _ __  ___  __ _  ___| |_ _  ___  _ __  ___ 
//    | | '__/ _` | '_ \/ __|/ _` |/ __| __| |/ _ \| '_ \/ __|
//    | | | | (_| | | | \__ \ (_| | (__| |_| | (_) | | | \__ \
//    \_/_|  \__,_|_| |_|___/\__,_|\___|\__|_|\___/|_| |_|___/
     
// Load Transactions
function loadTransactions() {
    // Hide other Divs
    // Add transitions here eventually
    document.getElementById("overviewDiv").style.display = "none"
    document.getElementById("sendDiv").style.display = "none"
    document.getElementById("createDiv").style.display = "none"

    // Remove the Active Tag
    removeActiveTag("transactionsTab")

    // Show Transactions page
    document.getElementById("transactionsDiv").style.display = "block"

    getTransactions()
}

function getTransactions() {
    // var requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    // }

    // fetch("http://api.agavewallet.com:8089/v1/transactions?address=mgYMis9wpPe4uCA8oNcAJvhCPrhkqPNayg&type=card", requestOptions)
    //     .then(response => response.json())
    //     .then(result => {
    //         console.log("Transactions", result)
    //     })
    //     .catch(error => console.log('error', error))

    // console.log("transactionsTest", JSON.parse(transactionsTest))

    // Get recent transactions data
    var recentTransactionsData = JSON.parse(transactionsTest)
    // // Get our table
    for (const i in recentTransactionsData) {
        // Get our table 
        var table = document.getElementById("transactions")
        
        var row = table.insertRow(1)
        
        //   Icon
        var icon = row.insertCell(0)
        var iconUrl = 'https://raw.githubusercontent.com/Agave-Wallet/agave-icons/master/32/' + recentTransactionsData[i].deck_id + '.png'

        // TODO: Clear the table so its doesn't load repeatedly

        // Idk why its not working but super frustrating
        fetch(iconUrl, { method: 'HEAD'})
            .then(res => {
                console.log("res", res)
                if (res.ok) {
                    icon.innerHTML = "<img class='tableIcon' src='" + iconUrl + "'>"
                } else {
                    icon.innerHTML = "<img class='tableIcon' src='img/logo_only_white.svg'>"
                }
            }).catch(err => console.log('Error:', err))        

        //   Transaction Type Icon
        var transactionIcon = row.insertCell(1)
        if (recentTransactionsData[i].type == "send") {
            transactionIcon.innerHTML = '<img class="tableIcon" src="img/icons/Arrow-Left-Circle.svg">'
        } else {
            transactionIcon.innerHTML = '<img class="tableIcon" src="img/icons/Arrow-Right-Circle.svg">'
        }
        //   Transaction Type
        var transactionType = row.insertCell(2)
        if (recentTransactionsData[i].type == "send") {
            transactionType.innerHTML = 'Sent'
        } else {
            transactionType.innerHTML = 'Received'
        }
        //   Asset - deck_id
        var asset = row.insertCell(3)
        asset.innerHTML = recentTransactionsData[i].deck_id
        //   Amount - amount
        var amount = row.insertCell(4)
        amount.innerHTML = recentTransactionsData[i].amount
        //   Receiver
        var receiver = row.insertCell(5)
        if (recentTransactionsData[i].type == "send") {
            receiver.innerHTML = '(' + recentTransactionsData[i].receiver + ')'
        } else {
            receiver.innerHTML = recentTransactionsData[i].sender
        }
        
        //   Transaction Id - card_id
        var transactionId = row.insertCell(6)
        transactionId.innerHTML = '<a href="https://tblockbook.peercoin.net/tx/' + recentTransactionsData[i].card_id + '">TX ID</a>' 
        // console.log(recentTransactionsData[i])
    }
}

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