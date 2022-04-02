const {
  MessageEmbed, MessageActionRow
} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { MessageButton } = require('discord.js')
module.exports = {
  name: "support",
  category: "🔰 Info",
  usage: "invite",
  description: "Sends you the Support Server Link",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    try {
      let button_public_invite = new MessageButton().setStyle('LINK').setLabel('Invite Smooth Bot').setURL("https://discord.com/oauth2/authorize?client_id=954232308876062760&permissions=139858406496&scope=bot%20applications.commands")
      let button_support_dc = new MessageButton().setStyle('LINK').setLabel('Support Server').setURL("https://discord.gg/sBKcF7jH9X")
      let button_invite = new MessageButton().setStyle('LINK').setLabel('Youtube').setURL(`https://youtube.com/c/REFLEXESPORTSINDIA`)
      //array of all buttons
      const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
      message.reply({
        embeds: [new MessageEmbed()
          .setColor(ee.color)
          .setTitle(`SUPPORT SERVER`)
          .setDescription(`[CLICK HERE](https://discord.gg/sBKcF7jH9X)`)
          .setFooter('REFLEX ESPORTS | powered by DEADLY', 'https://cdn.discordapp.com/avatars/942635744520974446/3956c2fc75e818fe7465b44528179827.webp')
          .setURL("https://discord.gg/VNQ7Atz2wM")],
        components: allbuttons
      });
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
