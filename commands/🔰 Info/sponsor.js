const {MessageEmbed} =require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { swap_pages2	 } = require(`${process.cwd()}/handlers/functions`);
module.exports = {
	name: "sponsor",
	category: "🔰 Info",
	aliases: ["sponsors"],
	description: "Shows the sponsor of this BoT",
	usage: "sponsor",
	type: "bot",
	run: async (client, message, args, cmduser, text, prefix) => {
		let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
		
	try{
			let embed1 = new MessageEmbed()
		    .setColor(es.color)
		    .setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable1"]))
		    .setURL("https://discord.com/invite/sBKcF7jH9X")
		    .setDescription(`
 Sponsor of This Bot is:
**Deadly** The Communtiy Server which  have many giveaway and invite rewards
<:arrow:832598861813776394> THEY HAVE A MUSIC BOT TOO [SMOOTH](https://discord.com/oauth2/authorize?client_id=954232308876062760&permissions=139858406496&scope=bot%20applications.commands),
<:arrow:832598861813776394> Thanks to them, we are able to host and make our bot
<:arrow:832598861813776394> Our suggestion is, if you want to make your bot, then go to [Deadly](https://discord.com/invite/sBKcF7jH9X)

**What they are offering:**
<:arrow:832598861813776394> **>>** MUSIC BOTS , MOD BOT , MOD MAIL and MORE ...
<:arrow:832598861813776394> **>>** Owo Cash , Dank Memer Coin and MORE
[**Discord Server:**](https://discord.com/invite/sBKcF7jH9X)
[**Website:**](soon)`)
		    .setImage("https://cdn.discordapp.com/attachments/959437156483485696/959701873726742599/giphy.gif")
		    .setFooter("Deadly",  "https://discord.com/invite/sBKcF7jH9X")
		
		let embed2 = new MessageEmbed()
			.setColor(es.color)
			.setTimestamp()
			.setFooter("Village Hidden In The Leaves')
			.setImage("https://cdn.discordapp.com/attachments/807985610265460766/822982640000172062/asdasdasdasdasd.png")
			.setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable4"]))
			.setURL("https://discord.gg/45cu4p3Z3G")
			.setDescription(`
<:arrow:832598861813776394> **>>** MUSIC BOTS , MOD BOT , MOD MAIL and MORE Same Like Deadly ...

<:arrow:832598861813776394> **>>** Owo Cash , Dank Memer Coin and MORE

<:arrow:832598861813776394> Check out their [Discord](https://discord.gg/45cu4p3Z3G) to get your own Bot too!`);
			swap_pages2(client, message, [embed1, embed2])
		} catch (e) {
        console.log(String(e.stack).grey.bgRed)
		return message.reply({embeds: [new MessageEmbed()
		  .setColor(es.wrongcolor)
		  .setFooter(client.getFooter(es))
		  .setTitle(client.la[ls].common.erroroccur)
		  .setDescription(eval(client.la[ls]["cmds"]["info"]["color"]["variable2"]))
		]});
    }
  }
}
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://discord.gg/milrato
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention him / Milrato Development, when using this Code!
  * @INFO
*/
