module.exports.run = async(bot, message, args) =>{
		if(!message.author.id === '615668733507010561') return;
	let Discord = require("discord.js")
	try {
    if(!args.join(" ")) return message.channel.send("Undefined.")
	let code = await eval("(async() => { "+args.join(" ")+" })()")
	let type = typeof code
	let nts = {
		_configs1: {
		string: "String",
		number: "Number",
		object: "Object",
		"function": "Function",
		array: "Array",
		promise: "Promise",
		},
		nottype: "[NTS ???]",
		apierror: "NTSError:"
	}
	      if (typeof code !== "string")
        code = require("util").inspect(code, { depth: 0 });
	let embed = new Discord.MessageEmbed()
	.addField("Entrada:", "```js\n"+args.join(" ")+"\n```")
	.addField("Salida:", "```js\n"+code.replace(client.token, "ad")+"\n```")
	.addField("Tipo:", "```js\n"+nts._configs1[type]+"\n```")
	.setColor("RANDOM")
	message.channel.send(embed)
	} catch(e) {
			let nts = {
		_configs1: {
		string: "[NTS Text]",
		number: "[NTS Number]",
		object: "[NTS Object]",
		"function": "[NTS Function]",
		array: "[NTS Array]"
		},
		nottype: "[NTS ???]",
		apierror: "NTS Error: "
	}
	message.channel.send("`ERROR`: ```js\n"+nts.apierror+e.message+"\n```")
	}
	}

module.exports.help = {
    name: "eval",
    aliases: ['e']
  };
