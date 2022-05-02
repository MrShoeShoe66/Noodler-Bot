const generateImage = require('../../getWelcomeImg')
const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "level",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        const user = message.mentions.users.first()
        if (user === undefined) {
            const clientID = message.author.id
            const embedMSG = getEmbed.basic(`Your Levels`, [
                {
                    "name": 'Total XP',
                    "value": `${db.get(clientID)}`,
                    "inline": true
                },
                {
                    "name": 'Level',
                    "value": `${Math.floor(db.get(clientID) / 1000)}`,
                    "inline": true
                }
            ])
            
            message.reply({embeds: [embedMSG]})
        } else {
            if (db.get(user.id) === undefined) {
                const embedMSG = getEmbed.err("User Not Found", [{
                    "name": 'User you enterd was not found!',
                    "value": 'User could not be found in database, or they have no levels!',
                    "inline": true
                }])

                message.reply({ embeds: [embedMSG] })
            } else {
                const embedMSG = getEmbed.basic(`<@${user.id}>'s levels`, [
                    {
                        "name": 'Total XP',
                        "value": `${db.get(user.id)}`,
                        "inline": true
                    },
                    {
                        "name": 'Level',
                        "value": `${Math.floor(db.get(user.id) / 1000)}`,
                        "inline": true
                    }
                ])
                
                message.reply({embeds: [embedMSG]})
            }
        }
    }
}