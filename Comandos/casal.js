const Discord = require("discord.js");
const c = require('../config.json');
const mergeImg = require('merge-img');

module.exports.run = async (bot, message, args) => {
    let user1 = message.guild.member(message.mentions.users.firstKey());
    let user2 = message.guild.member(message.mentions.users.lastKey());
    if (!user1 || (!user1 && !user2) || !user2) {
        const embed = new Discord.MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `<a:errado:734490577718214746> Use, \`${c.prefix}casal <membro 1> <membro 2>.\``
      )
      .setAuthor(message.guild.name, message.guild.iconURL())
      .setFooter(message.member.user.tag)
      .setTimestamp()
    return message.reply(embed)
    }
    
        await mergeImg([user1.user.displayAvatarURL({ format: "png" }), user2.user.displayAvatarURL({ format: "png" })]).then((img) => {
            img.write(`./Assets/Casal.png`, () => {
                const embed = new Discord.MessageEmbed()
                .setDescription(`_**💕 Que casal lindo ❤**_`)
                .setColor(c.cor)
                .attachFiles(['./Assets/Casal.png'])
                .setImage('attachment://Casal.png')
                return message.reply(embed)
            })
        });
}