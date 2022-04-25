const Discord = require('discord.js');
require('dotenv').config()

const generateImage = require('./getWelcomeImg')

const TOKEN = process.env.TOKEN

const Database = require('elementary-db');
const db = new Database('levels.json');


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: ".",
    owners: ["758444397586284546"],
    db
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require('./handlers/events')(bot, reload)
client.loadCommands = (bot, reload) => require('./handlers/commands')(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

const welcomeChannelId = "963487256482578553"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `Welcome to the server <@${member.id}>!`,
        files: [img]
    })
})

client.login(TOKEN)