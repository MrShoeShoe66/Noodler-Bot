const Discord = require('discord.js')

const basicMsg = (tittle, fields, username) => {
    return {
        "type": "rich",
        "title": tittle,
        "description": "",
        "color": "#00FFFF",
        "fields": fields,
        "footer": {
            "text": "A Discord bot For the Noodler's Server by MrShoe_#6147"
        },
        "timestamp": Date.now(),
        "username": username
    }
}

const infoMsg = (tittle, fields, username) => {
    return {
        "type": "rich",
        "title": tittle,
        "description": "",
        "color": "#FFD700",
        "fields": fields,
        "footer": {
            "text": "A Discord bot For the Noodler's Server by MrShoe_#6147"
        },
        "timestamp": Date.now(),
        "username": username
    }
}

const errorMsg = (tittle, fields, username) => {
    return {
        "type": "rich",
        "title": `Error: ${tittle}`,
        "description": "",
        "color": "#FF0000",
        "fields": fields,
        "footer": {
            "text": "A Discord bot For the Noodler's Server by MrShoe_#6147\nReport with .bug"
        },
        "timestamp": Date.now(),
        "username": username
    }
}

module.exports = {
    basic: basicMsg,
    err: errorMsg,
    info: infoMsg
}