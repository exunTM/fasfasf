const { bot } = require("../index");
const mongoose = require("mongoose");
const ModelPrefix = require("../utils/database/models/prefix");

bot.on("message", async (message) => {
  let server = message.guild.id;
  let res = await ModelPrefix.findOne({ server: server });
  let prefix = res ? res.prefix : "!";

  if (message.author.bot) return;

  function emojiNitro(msg) {
    message.guild.emojis.cache.filter(e => e.animated).map(e => e).forEach(async e => {
        if(msg.member.user.displayAvatarURL({ dynamic: true}).endsWith(".gif")) {
    return;
  } 
  if (msg.content.includes(`:${e.name}:`)) {
    let finalMessage = msg.content.replace(new RegExp(`:${e.name}:`, "gi"), e.toString()); 
            
    let name = msg.member.nickname || msg.member.user.username;

    let webhook = await msg.channel.createWebhook(name, {
      avatar: msg.member.user.displayAvatarURL({ dynamic: true }),
      reason: `Emoji nitro ${name}`
    });
    webhook.send(finalMessage).then(() => {
      msg.delete();
      webhook.delete("Used");
    });
        }
    });
}

if (!message.content.startsWith(prefix)) {
emojiNitro(message);
 return;
}


  if (!message.content.startsWith(prefix)) return;

  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();
  let command;

  if (bot.commands.has(cmd)) {
    command = bot.commands.get(cmd);
  } else {
    command = bot.commands.get(bot.aliases.get(cmd));
  }

  if (command) command.run(bot, message, args);
});
