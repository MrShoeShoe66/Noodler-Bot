const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "roblox",
    category: "socal",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        const embededMsg = getEmbed.basic('Roblox', [{
            "name": 'https://www.roblox.com/users/332706858/profile',
            "value": `Here Is the Noodler's Roblox`,
            "inline": true
        }], message.author.username)
        message.reply({ embeds: [embededMsg] })
    }
}