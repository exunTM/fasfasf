require("dotenv").config()
const discord = require("discord.js");
const bot = new discord.Client({
  disableEveryone: true
});
const lib = require("./lib/functions");

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.snipes = new discord.Collection();

lib.setup(bot);

module.exports.bot = bot;

bot.login(process.env.TOKEN);