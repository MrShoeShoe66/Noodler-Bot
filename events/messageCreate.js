const Discord = require('discord.js')
const getEmbed = require('../util/getEmbed')
const randomInt = require('../util/mathUtil')

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const { client, prefix, owners, db } = bot

        if (!message.guild) return

        if (message.author.bot) return

        if (!message.content.startsWith(prefix)) {
            if (!db.has(message.author.id)) {
                db.set(message.author.id, 1)
            }
            const newXp = db.get(message.author.id) + randomInt(15)
            db.set(message.author.id, newXp)
            return
        }

        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const cmdstr = args.shift().toLowerCase()

        let command = client.commands.get(cmdstr)
        if (!command) {
            const errorMsg = getEmbed.err("Command Not Found", [{
                "name": 'Command you entered is not valid',
                "value": `Command .${cmdstr} was not found!`,
                "inline": true
            }])
            return message.reply({embeds: [errorMsg]})
        }

        if (command.devOnly && !owners.includes(message.author.id)) {
            const errorMsg = getEmbed.err("Incorect User", [{
                "name": 'User is not a dev',
                "value": 'To use that command you need to be a Developer of this bot!',
                "inline": true
            }])
            return message.reply({embeds: [errorMsg]})
        }
        
        if (command.permissions && message.member.permissions.missing(command.permissions).length !== 0) {
            return message.reply("You don't have the permison to use that command!! Sorry!")
        }

        try {
            await command.run({client, db, message, args})
        } catch (err) {
            const errorMsg = getEmbed.err("Command Error", [{
                "name": 'Error happend when runing your commnd!',
                "value": `Error Log: \n${String(err)}`,
                "inline": true
            }])
            return message.reply({embeds: [errorMsg]})
        }
    }
}