const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "socal",
    category: "socal",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        const embededMsg = getEmbed.basic('Socals', [{
            "name": 'Youtube',
            "value": `https://www.youtube.com/thenoodlernoodleasmr`,
            "inline": false
        }, {
            "name": 'Roblox',
            "value": `https://www.roblox.com/users/332706858/profile`,
            "inline": false
        }], message.author.username)
        message.reply({ embeds: [embededMsg] })
    }
}