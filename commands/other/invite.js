const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "invite",
    category: "other",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        // const embededMsg = getEmbed.basic('Invite', [{
        //     "name": 'https://discord.gg/4PVVkamrSX',
        //     "value": `Noodler Server Invite`,
        //     "inline": false
        // }], message.author.username)
        // message.reply({ embeds: [embededMsg] })
        message.reply('https://discord.gg/4PVVkamrSX')
    }
}