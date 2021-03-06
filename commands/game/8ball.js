const getEmbed = require('../../util/getEmbed')

let eightball = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.',
    'No way.',
    'Maybe',
    'The answer is hiding inside you',
    'No.',
    'Depends on the mood of the CS god',
    '||No||',
    '||Yes||',
    'Hang on',
    'It\'s over',
    'It\'s just the beginning',
    'Good Luck',
];

module.exports = {
    name: "8ball",
    category: "game",
    permissions: [],
    devOnly: false,
    run: async ({client, db, message, args}) => {
        if (!args[0]) {
			return message.reply('Please ask me a question.');
		} else {
            let question = ''
            for (const property in args) {
                question = `${question} ${args[property]}`
            }
			let index = (Math.floor(Math.random() * Math.floor(eightball.length)));
            const embedMSG = getEmbed.basic("8Ball!", [
                {
                    "name": `Question: ${question}`,
                    "value": `Response: ${eightball[index]}`,
                    "inline": true
                },
            ], message.author.username)
			message.reply({embeds: [embedMSG]})
		}
    }
}