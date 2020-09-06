const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let msg = bot.snipes.get(message.channel.id)
    message.channel.send(msg)
    console.log(msg)
};

module.exports.help = {
  name: "snipe",
  aliases: []
};