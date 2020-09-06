const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  return message.channel.send('Hola Mundo! :D');

};

module.exports.help = {
  name: "test",
  aliases: ['alias1', 'alias2', 'alias3', 'holamundo']
};
