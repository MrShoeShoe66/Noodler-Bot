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
                "inline": true
            },
            {
                "name": 'YouTube',
                "value": "Sends the Noodler's Youtube",
                "inline": false
            },
            {
                "name": 'Roblox',
                "value": "Sends the Noodler's Roblox",
                "inline": true
            }
        ])
        message.reply({embeds: [embedMSG]})
    }
}