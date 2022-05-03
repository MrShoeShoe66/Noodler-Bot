const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "info",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        const embedMSG = getEmbed.basic("Bot Info", [
            {
                "name": 'Built for',
                "value": `This bot was built for the Noodler's server`,
                "inline": true
            },
            {
                "name": 'Developer',
                "value": `This bot was built by <@758444397586284546>`,
                "inline": false
            },
            {
                "name": 'Backend Info',
                "value": `Built with Node.js\nUsing the Discord.js, Canva, and Elementary-db`,
                "inline": false
            },
            {
                "name": 'Source',
                "value": `https://github.com/MrShoeShoe66/Noodler-Bot`,
                "inline": false
            }
        ], message.author.username)
        message.reply({embeds: [embedMSG]})
    }
}