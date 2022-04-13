module.exports = {
    name: "ready",
    run: async (bot) => {
        console.log("Bot Online!")
        const { client } = bot 
        client.user.setActivity('Use .help')
        client.user.setStatus('dnd')
    }
}