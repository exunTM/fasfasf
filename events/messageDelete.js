const { bot } = require("../index.js")
bot.on('messageDelete', async (message) =>{

    		    bot.snipes.set(message.channel.id, {
      message: message
    })
    console.log(message.content)
	})