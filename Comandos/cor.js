const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const c = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (
    !message.member.roles.cache.get("743568009611837470") &&
    message.member.id != "720597860927930389"
  ) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Você não possui permissões suficientes. (Vip)`
      )
    return message.reply(embed);
  }

  message.delete()

  let member = message.member;

  function removeCargos() {
    member.roles.remove("735423388276883516").catch(() => {});
    member.roles.remove("735426365808967729").catch(() => {});
    member.roles.remove("735423642682261595").catch(() => {});
    member.roles.remove("735424380175122534").catch(() => {});
    member.roles.remove("735424512178257940").catch(() => {});
    member.roles.remove("735424010225057843").catch(() => {});
    member.roles.remove("735424179926466590").catch(() => {});
  }

  if (!args[0]) {
    const nargs0 = new MessageEmbed()
      .setDescription(
        `_**Como usar:**_
⚙ Uso: **${c.prefix}cor <nome da cor/0>**

_**Informações:**_
🧨 Remover cores: **${c.prefix}cor 0**
🎨 Paleta de Cores:

**<@&735423388276883516>**
**<@&735426365808967729>**
**<@&735423642682261595>**
**<@&735424380175122534>**
**<@&735424512178257940>**
**<@&735424010225057843>**
**<@&735424179926466590>**

**Obs:** Não é necessário remover uma cor para adicionar outra, o própio bot faz isso UwU.`
      )
      .setColor(c.cor)
      .setAuthor(message.guild.name, message.guild.iconURL())
      .setFooter(message.member.user.tag)
      .setTimestamp()
    return message.reply(nargs0).then(msg => msg.delete({ timeout: 10000 }).catch(err => {}))
  }

    switch (args[0]) {
      case "0":
        removeCargos();

        const embed = new MessageEmbed()
          .setDescription(`🎨 **${message.member.user.tag}** cores **atualizadas**.`)
          .setColor(c.cor)
        return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))

        break;

      case "black":
        if (member.roles.cache.get("735423388276883516")) {
          const embed = new MessageEmbed()
            .setColor(c.cor)
            .setDescription(
              `🛑 Você já possui essa cor.`
            )
          return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
        }

        removeCargos();

        member.roles.add("735423388276883516").catch(() => {});

        const sucessblack = new MessageEmbed()
        .setDescription(`🎨 **${message.member.user.tag}** cores **atualizadas**.`)
        .setColor(c.cor)
      return message.reply(sucessblack).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))

        break;

      case "white":
        if (member.roles.cache.get("735426365808967729")) {
          const embed = new MessageEmbed()
            .setColor(c.cor)
            .setDescription(
              `🛑 Você já possui essa cor.`
            )
          return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
        }

        removeCargos();

        member.roles.add("735426365808967729").catch(() => {});

        const sucesswhite = new MessageEmbed()
        .setDescription(`🎨 **${message.member.user.tag}** cores **atualizadas**.`)
        .setColor(c.cor)
      return message.reply(sucesswhite).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))

        break;

      case "red":
        if (member.roles.cache.get("735423642682261595")) {
          const embed = new MessageEmbed()
            .setColor(c.cor)
            .setDescription(
              `🛑 Você já possui essa cor.`
            )
          return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
        }

        removeCargos();

        member.roles.add("735423642682261595").catch(() => {});

        const sucessred = new MessageEmbed()
        .setDescription(`🎨 **${message.member.user.tag}** cores **atualizadas**.`)
        .setColor(c.cor)
      return message.reply(sucessred).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))

        break;

      case "pink":
        if (member.roles.cache.get("735424380175122534")) {
          const embed = new MessageEmbed()
            .setColor(c.cor)
            .setDescription(
              `🛑 Você já possui essa cor.`
            )
          return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
        }

        removeCargos();

        member.roles.add("735424380175122534").catch(() => {});

        const sucesspink = new MessageEmbed()
        .setDescription(`🎨 **${message.member.user.tag}** cores **atualizadas**.`)
        .setColor(c.cor)
      return message.reply(sucesspink).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))

        break;

      case "green":
        if (member.roles.cache.get("735424512178257940")) {
          const embed = new MessageEmbed()
            .setColor(c.cor)
            .setDescription(
              `🛑 Você já possui essa cor.`
            )
          return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
        }

        removeCargos();

        member.roles.add("735424512178257940").catch(() => {});

        const sucessgreen = new MessageEmbed()
        .setDescription(`🎨 **${message.member.user.tag}** cores **atualizadas**.`)
        .setColor(c.cor)
      return message.reply(sucessgreen).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))

        break;

      case "orange":
        if (member.roles.cache.get("735424010225057843")) {
          const embed = new MessageEmbed()
            .setColor(c.cor)
            .setDescription(
              `🛑 Você já possui essa cor.`
            )
          return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
        }

        removeCargos();

        member.roles.add("735424010225057843").catch(() => {});

        const sucessorange = new MessageEmbed()
        .setDescription(`🎨 **${message.member.user.tag}** cores **atualizadas**.`)
        .setColor(c.cor)
      return message.reply(sucessorange).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))

        break;

      case "purple":
        if (member.roles.cache.get("735424179926466590")) {
          const embed = new MessageEmbed()
            .setColor(c.cor)
            .setDescription(
              `🛑 Você já possui essa cor.`
            )
          return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
        }

        removeCargos();

        member.roles.add("735424179926466590").catch(() => {});

        const sucesspurple = new MessageEmbed()
        .setDescription(`🎨 **${message.member.user.tag}** cores **atualizadas**.`)
        .setColor(c.cor)
      return message.reply(sucesspurple).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))

        break;
    }
};
