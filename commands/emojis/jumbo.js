const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.channel.send('Nombra o pon un emoji, `jumbo :troll:`')
    let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(':')[1]) || message.guild.emojis.cache.find(e => args.join(' ').toLowerCase() === e.name.toLowerCase())
  if(!emoji) return message.channel.send('Emoji no encontrado en este servidor.')

    let embed = new MessageEmbed()
    .setDescription(`URL del emoji ${emoji.name}`)
    .setImage(emoji.url)

    message.channel.send(embed)

};

module.exports.help = {
  name: "jumbo",
  aliases: []
};
