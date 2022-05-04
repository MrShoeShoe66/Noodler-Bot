const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "flex",
    category: "dev",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        if (message.author.id === '758444397586284546') {
            message.reply('Hello father')
        } else {
            message.reply('who da hell are you?')
        }
    }
}