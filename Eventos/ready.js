const { MessageEmbed } = require("discord.js");
const c = require("../config.json");

module.exports = async (client) => {
  let status = [{ name: `1997 | ${c.prefix}help`, type: "STREAMING", url: "https://www.twitch.tv/kauexz." }];

  function setStatus() {
    let randomStatus = status[Math.floor(Math.random() * status.length)];
    client.user.setPresence({ activity: randomStatus });
  }

  setStatus();

  setInterval(() => {

    let Embeds = [
      "🚀 Seja ativo no chat e receba **<@&749301495622795374>**!",
      "📮 Convide os seus amigos para o servidor!",
      `📛 Tem alguma dúvida sobre o **<@!758135106605940777>**? Use **${c.prefix}help**`,
      `📛 Tem alguma dúvida sobre o **<@!758135106605940777>**? Use **>help**`
        ]

    let Texto = Embeds[Math.floor(Math.random() * Embeds.length)]

    const Embed = new MessageEmbed()
    .setColor(c.cor)
    .setDescription(`${Texto}`)
    return client.guilds.cache.get('747962402556870691').channels.cache.get("747962403047735308").send(Embed);
  }, 1000 * 60 * 60 * 9);
};
