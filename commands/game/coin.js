const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "coin",
    category: "game",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        let num = Math.random();

        if (num < 0.5) {
            const embedMSG = getEmbed.basic("Coin!", [
                {
                    "name": 'Output:',
                    "value": 'Heads!',
                    "inline": true
                },
            ], message.author.username)
            message.reply({embeds: [embedMSG]})
        } else {
            const embedMSG = getEmbed.basic("Coin!", [
                {
                    "name": 'Output:',
                    "value": 'Tails!',
                    "inline": true
                },
            ], message.author.username)
            message.reply({embeds: [embedMSG]})
        }
    }
}