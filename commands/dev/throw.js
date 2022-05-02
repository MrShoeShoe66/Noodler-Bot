const getEmbed = require('../../util/getEmbed')

module.exports = {
    name: "throw",
    category: "dev",
    permissions: [],
    devOnly: true,
    run: async ({client, db, message, args}) => {
        throw 'Error Test Sucsessful'
    }
}