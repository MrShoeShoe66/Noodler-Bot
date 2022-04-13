const getSocal = require('../../util/getSocal')

module.exports = {
    name: "youtube",
    category: "socal",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        embededMsg = getSocal("Youtube", "https://www.youtube.com/thenoodlernoodleasmr")
        message.reply({ embeds: [embededMsg] })
    }
}