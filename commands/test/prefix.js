const discord = require("discord.js");

    const prefixModel = require('../../utils/database/models/prefix')

    module.exports.run = async(bot, message, args) => {
      if(!args[0])return message.channel.send(`Ingresa el nuevo prefix`)
      if(args.length >= 3)return message.channel.send(`Prefix muy largo`)
      let consulta = await prefixModel.findOne({server: message.guild.id})

      if(consulta){

      await prefixModel.updateOne({server: message.guild.id}, {$set: {prefix: args[0] }})
      return message.channel.send(`El nuevo prefix es ${args[0]}`)
    }else {

      let nuevo = await prefixModel({server: message.guild.id, prefix: args[0]})
      nuevo.save()
  
      return message.channel.send(`El nuevo prefix es ${args[0]}`)
      }
    }

module.exports.help = {
    name: "setprefix",
    aliases: ['prefix', 'set-prefix']
  };
