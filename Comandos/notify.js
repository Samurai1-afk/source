const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const c = require("../config.json");

module.exports.run = async (client, message, args) => {
    message.delete()

    message.member.roles.add("749431468819873922").catch(O_o => {})

    const sucess = new MessageEmbed()
          .setDescription(
            `🔔 Você **receberá** todas as notificações de **${message.guild.name}**.`
          )
          .setColor(c.cor)
      message.reply(sucess).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))

};