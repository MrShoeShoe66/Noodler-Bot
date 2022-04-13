const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        const latency = Date.now() - message.createdTimestamp
        const apiLatency = message.client.ws.ping
        const embedMSG = getEmbed.basic("Pong!", [
            {
                "name": 'Latency',
                "value": `${latency}ms`,
                "inline": true
            },
            {
                "name": 'API Latency',
                "value": `${apiLatency}ms`,
                "inline": true
            }
        ])
        message.reply({embeds: [embedMSG]})
    }
}