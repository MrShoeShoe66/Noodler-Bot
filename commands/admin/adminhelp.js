const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "adminhelp",
    category: "admin",
    permissions: ["ADMINISTRATOR"],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        const embedMSG = getEmbed.info("Help", [
            {
                "name": 'Prefix',
                "value": `Command Prefix: .`,
                "inline": false
            },
            {
                "name": 'ban',
                "value": `Ban a user`,
                "inline": false
            },
            {
                "name": 'kick',
                "value": `Kick a user`,
                "inline": false
            },
            {
                "name": 'Clear',
                "value": `Clear a channel`,
                "inline": false
            },
            {
                "name": 'timeout',
                "value": `Timeout a user`,
                "inline": false
            }
        ])
        message.reply({embeds: [embedMSG]})
    }
}