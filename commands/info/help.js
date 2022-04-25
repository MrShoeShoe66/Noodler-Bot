const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "help",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        const embedMSG = getEmbed.info("Help", [
            {
                "name": 'Prefix',
                "value": `Command Prefix: .`,
                "inline": true
            },
            {
                "name": 'Ping',
                "value": 'Shows the latency of the bot',
                "inline": false
            },
            {
                "name": '8ball',
                "value": 'Runs a 8 ball your question',
                "inline": false
            },
            {
                "name": 'coin',
                "value": 'Flips a coin',
                "inline": false
            },
            {
                "name": 'dice',
                "value": 'Rowls a 6d dice',
                "inline": false
            },
            {
                "name": 'info',
                "value": 'Shows bot info',
                "inline": false
            },
            {
                "name": 'level',
                "value": 'Shows the user level',
                "inline": false
            },
            {
                "name": 'youtube',
                "value": "Sends the Noodler's Youtube",
                "inline": false
            },
            {
                "name": 'roblox',
                "value": "Sends the Noodler's Roblox",
                "inline": true
            }
        ])
        message.reply({embeds: [embedMSG]})
    }
}