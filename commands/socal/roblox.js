const getSocal = require('../../util/getSocal')

module.exports = {
    name: "roblox",
    category: "socal",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        embededMsg = getSocal("Roblox", "https://www.roblox.com/users/332706858/profile")
        message.reply({ embeds: [embededMsg] })
    }
}