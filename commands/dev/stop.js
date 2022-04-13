const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "stop",
    category: "dev",
    permissions: [],
    devOnly: true,
    run: async ({client, db, message, args}) => {
        await message.reply("Shuting Down Bot...")
        process.abort()
    }
}