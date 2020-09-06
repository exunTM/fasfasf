const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let tag = args[0]
    if(!tag) tag = message.author.discriminator
    if(isNaN(tag)) tag = message.author.discriminator
    let discriminators = bot.users.cache.filter(q => q.discriminator == tag)
    if(discriminators.size < 1) return message.channel.send(`No encontre a nadie con el discriminador #${tag}`)
    let i = 0
    let list = []
    for(let users of discriminators.map(q => q.tag)) {
    i++
    list.push(`${i}# ${users}`)
    }
    let txt = ""+list.join("\n")
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(`:blue_book: : Hay ${discriminators.size} usuarios con el discriminador ${tag}`, "```"+txt.slice(0, 985)+"```")
    message.channel.send(embed)
    }

    module.exports.help = {
        name: "discriminator",
        aliases: ['discrim']
      };
      