const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

const emojiList = message.guild.emojis.cache.map((e) => (e) + '   |   ' + e.name).join('\n\n');
        for(let i = 0; i < emojiList.length; i += 2000) {
          const splitList = emojiList.substring(i, Math.min(emojiList.length, i + 2000));
          const embed = new Discord.MessageEmbed()
            .setTitle(`Emojis del server '${message.guild.name}': `)
            .setColor(0x003366)
            .setDescription(splitList);
          message.channel.send({embed});
      }
    }

    module.exports.help = {
        name: "list-embed",
        aliases: ['emojis-embed']
      };
      