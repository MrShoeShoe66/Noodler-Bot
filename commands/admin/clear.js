const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "clear",
    category: "admin",
    permissions: ["MANAGE_MESSAGES"],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        message.delete()
        await message.channel.bulkDelete(100, true).then( async (m) => {
            if (m.size === 0 ) {
                const embedMSG = getEmbed.err("Unable to clear messages", [
                    {
                        "name": 'Messages to old!',
                        "value": `Because to the Discord api, is a message is older then 14 days it can't be bulk deleted!`,
                        "inline": true
                    }
                ], message.author.username)
                message.channel.send({ embeds: [embedMSG] })
                return
            }  
            const embedMSG = getEmbed.basic("Cleared Messages", [
                {
                    "name": 'Succsess!',
                    "value": `Cleared ${m.size} Messages!`,
                    "inline": true
                }
            ], message.author.username)
            message.channel.send({ embeds: [embedMSG] })
        })
    }
}