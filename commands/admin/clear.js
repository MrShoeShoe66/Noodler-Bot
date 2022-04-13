const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "clear",
    category: "admin",
    permissions: ["MANAGE_MESSAGES"],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        message.channel.bulkDelete(100)
        const embedMSG = getEmbed.basic("Cleared Messages", [
            {
                "name": 'Succsess!',
                "value": `Cleared Messages!`,
                "inline": true
            }
        ])
        message.channel.send({ embeds: [embedMSG] })
    }
}