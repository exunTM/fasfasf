const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.guild.emojis.cache.size < 1) return message.channel.send('¡Este servidor no tiene emojis!')

let emojis = []
let emojis_a = []

message.guild.emojis.cache.filter(x => !x.animated).map(x => emojis.push(`<:${x.name}:${x.id}>`))

message.guild.emojis.cache.filter(x => x.animated).map(x => emojis_a.push(`<a:${x.name}:${x.id}>`))

let m = await message.channel.send({embed: { 
  title: `Lista de emojis de ${message.guild.name}`, 
  color: 'RANDOM', 
  fields: [{ 
    name: 'Emojis normales:',
    value: emojis[0] ? emojis.slice(0, 10).join('\n') : 'Este servidor no tiene emojis normales'
    
  },
  {
    name: 'Emojis animados:',
    value: emojis_a[0] ? emojis_a.slice(0, 10).join('\n') : 'Este servidor no tiene emojis animados'
   
  }],
}})
 
  await m.react('⬅️')
  await m.react('🔴')
  await m.react('➡️')

  let i = 0;
  let i2 = 10;
  
  let filtro = (reaction, user) => ['⬅️','🔴','➡️'].includes(reaction.emoji.name) && user.id === message.author.id;

  let colector = m.createReactionCollector(filtro, {time: 60000, max: 10});

  colector.on('collect', reaction => {
  
    switch(reaction.emoji.name){ 

      case "⬅️":
     
      if(i > 1){

      i-=10
      i2-=10

      m.edit({embed: {
        title: `Lista de emojis de ${message.guild.name}`, 
        color: 'RANDOM', 
        fields: [{ 
          name: 'Emojis normales:',
  
          value: emojis[0] ? emojis.slice(i, i2).join('\n') : 'Este servidor no tiene emojis normales'
        },
        {
          name: 'Emojis animados:',

          value: emojis_a[0] ? emojis_a.slice(i, i2).join('\n') : 'Este servidor no tiene emojis animados'
        }],
      }})      
      }

      break;

      case "🔴":

      colector.stop()
   
      break;
 
      case "➡️":
     
      if(emojis.slice(i, i2+1)[emojis.slice(i, i2+1).length - 1] !== emojis[emojis.length-1]){
     
      i+=10
      i2+=10
      
      m.edit({embed: {
        title: `Lista de emojis de ${message.guild.name}`, 
        color: 'RANDOM', 
        fields: [{ 
          name: 'Emojis normales:',
          
          value: emojis[0] ? emojis.slice(i, i2).join('\n') : 'Este servidor no tiene emojis normales'
        },
        {
          name: 'Emojis animados:',
          
          value: emojis_a[0] ? emojis_a.slice(i, i2).join('\n') : 'Este servidor no tiene emojis animados'
        }],
      }})      
      }
      break; 
    }
  })

};

module.exports.help = {
    name: "emoji-list",
    aliases: ['list-emojis', 'emojis-list', 'list-emoji', 'emojilist', 'listemoji']
  };  