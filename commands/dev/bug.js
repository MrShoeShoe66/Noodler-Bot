const getEmbed = require('../../util/getEmbed')
const Discord = require('discord.js')

module.exports = {
    name: "bug",
    category: "dev",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        const embedMSG = getEmbed.info("Report A Bug", [
            {
                "name": 'Report on GitHub',
                "value": 'https://github.com/MrShoeShoe66/Noodler-Bot/issues',
                "inline": false
            },
            {
                "name": 'Report by Mail',
                "value": 'mrshoeshoe66@gmail.com',
                "inline": false
            },
            {
                "name": 'On Discord',
                "value": 'MrShoe_#6147',
                "inline": false
            }
        ])
        message.reply({embeds: [embedMSG]})
    }
}