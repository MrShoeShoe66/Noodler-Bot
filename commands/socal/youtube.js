const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "youtube",
    category: "socal",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        const embededMsg = getEmbed.basic('Youtube', [{
            "name": 'https://www.youtube.com/thenoodlernoodleasmr',
            "value": `Here Is the Noodler's Youtube`,
            "inline": true
        }], message.author.username)
        message.reply({ embeds: [embededMsg] })
    }
}