const getEmbed = require('../../util/getEmbed')

const timeStamps = {
    '1m': 60 * 1000,
    '1h': 60 * 60 * 1000,
    '1d': 24 * 60 * 60 * 1000,
    '1w': 7 * 24 * 60 * 60 * 1000
}

module.exports = {
    name: "timeout",
    category: "admin",
    permissions: ["ADMINISTRATOR"],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        try {
            await message.mentions.members.first().timeout(timeStamps[args[1]], args[2])
            const embedMSG = getEmbed.basic("Timed out user", [
                {
                    "name": 'Succsess!',
                    "value": `Timed out user`,
                    "inline": true
                }
            ], message.author.username)
            message.channel.send({ embeds: [embedMSG] })
        } catch (error) {
            message.reply('An error occored when using that command!')
        }
    }
}