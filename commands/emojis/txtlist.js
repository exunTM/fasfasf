const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let emojis = message.guild.emojis.cache.map(x => x.name).join("\n")
    let txt = new Discord.MessageAttachment(Buffer.from(emojis), 'Lista de emojis.txt')
        message.channel.send(txt)

};

module.exports.help = {
    name: "txtlist",
    aliases: []
  };  