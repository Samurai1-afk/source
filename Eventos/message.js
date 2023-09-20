const { MessageEmbed } = require("discord.js");
const config = require("../config.json");
const firebase = require("firebase");
const database = firebase.database();

module.exports = async (client, message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  if(!message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.cache.has("743568139153047563") && !message.member.roles.cache.has("743568009611837470") && !message.member.roles.cache.has("745597365850865695") && !message.channel.id != "743568287698518018"){

    if(message.content.includes('discord.gg/kauexstore' || 'discord.gg/kauexstore' || 'discord.gg/kauexstore')){

        message.delete({ timeout: 1000 }).then(() => {
          const embed = new MessageEmbed()
            .setDescription(
              `📬 ${message.member.user} Você não pode enviar links aqui.`)
            .setColor(config.cor)
          return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }))
        });

    }

  }

  // SISTEMA DE LEVEL

  database
    .ref(`Bianca/Usuários/${message.member.user.id}`)
    .once("value")
    .then(async function(snap) {

      if (snap.val() == null) {
        database.ref(`Bianca/Usuários/${message.member.user.id}`).set({
          User: message.member.user.id,
          Level: 1,
          Xp: 0,
          Mutado: 0
        });
      } else {

        let pointsAdd = Math.floor(Math.random() * 7) + 8;

        xp = snap.val().Xp + pointsAdd
        nextLevel = snap.val().Level * 1000;

        database.ref(`Tiolucazz/Usuários/${message.member.user.id}`).update({
          Xp: xp
        });

          if(nextLevel <= xp) {
            nextLevel = snap.val().Level + 1

            database.ref(`Tiolucazz/Usuários/${message.member.user.id}`).update({
              Level: nextLevel
            });

            const embed = new MessageEmbed()
            .setDescription(
              `🍺 Você acaba de ficar **${nextLevel}%** mais hypado!`)
            .setColor(config.cor)
            await message.reply(embed)

          }

      }
    });

if (message.content.startsWith("<@!" + client.user.id + ">")) {
const emebd = new MessageEmbed()
            .setDescription(
              `<a:batidaum:745705716391739402> **Olá, no que posso ajudar? _Meu prefixo é \`${config.prefix}\`._**

🤖 Eu sou o bot _**Oficial**_ da __kauexstore__, fui criado pelo kauex _*${message.guild.owner}*_
🗃 Para ver meus comandos digite _**${config.prefix}help**_.`
            )
            .setColor(config.cor)
          return message.reply(emebd);
            }
  
  if (message.channel.id == "749319154909184040" || message.member.hasPermission("BAN_MEMBERS") || message.member.hasPermission("KICK_MEMBERS")) {

  /* COMMANDS */

  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;

  cmd.run(client, message, args, database);
    
  }
}