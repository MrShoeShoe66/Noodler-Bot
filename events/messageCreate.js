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
            if (db.JSON()[message.author.id] === null) {
                const tempJson = db.JSON()
                tempJson[message.author.id] = 1
                db.JSON(tempJson)
            }
            const newXp = db.JSON()[message.author.id] + randomInt(15)
            const tempJson = db.JSON()
            tempJson[message.author.id] = newXp
            db.JSON(tempJson)
            db.sync()
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
            let errMsg = err.toString()

            if (errMsg.startsWith("?")) {
                errMsg = errMsg.slice(1)
                await message.reply(errMsg)
            } else {
                return
            }
        }
    }
}