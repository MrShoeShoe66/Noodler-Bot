const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "dice",
    category: "game",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        const output = Math.floor(Math.random() * 5) + 1
        const embedMSG = getEmbed.basic("Dice!", [
            {
                "name": 'Output:',
                "value": output.toString(),
                "inline": true
            },
        ])
		message.reply({embeds: [embedMSG]})
    }
}