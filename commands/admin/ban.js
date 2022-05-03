const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "ban",
    category: "admin",
    permissions: ["ADMINISTRATOR"],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        await message.mentions.members.first().ban(args[1])
        const embedMSG = getEmbed.basic("Kicked user", [
            {
                "name": 'Succsess!',
                "value": `Baned user`,
                "inline": true
            }
        ], message.author.username)
        message.channel.send({ embeds: [embedMSG] })
    }
}