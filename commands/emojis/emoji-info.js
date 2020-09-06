const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[0]) return message.channel.send('Nombra o pon un emoji, `emoji-info :troll:`')

  let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(':')[1]) || message.guild.emojis.cache.find(e => args.join(' ').toLowerCase() === e.name.toLowerCase())

  if (!emoji) return message.channel.send('Ese emoji no existe en este servidor.')

        let embed = new MessageEmbed()
        .setColor('YELLOW')
        .setAuthor(`Información`, emoji.url)
        .setFooter(` - ${emoji.name}`, emoji.url)
        .setDescription(`🔎 Emoji ${emoji}\n🔎 Nombre \`${emoji.name}\`\n🔎 Creacion \`${emoji.createdAt.toLocaleDateString("es")}\`\n🔎 ID \`${emoji.id}\`\n🔎 Referencia \`${emoji}\`\n🔎 URL [Url del emoji](${emoji.url})`)
    .setImage(emoji.url)
        message.channel.send(embed)

};

module.exports.help = {
    name: "infoemoji",
    aliases: ['emoji-info', 'info-emoji', 'emojiinfo']
  };  