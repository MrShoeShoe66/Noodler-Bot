const getEmbed = require("./getEmbed")

module.exports = (socalName, link) => {
    return getEmbed.basic(socalName, [{
        "name": link,
        "value": `Here Is the Noodler's ${socalName}`,
        "inline": true
    }])
}