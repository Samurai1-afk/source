const { MessageEmbed } = require("discord.js");
const moment = require("moment");
moment.locale("pt-br");
const c = require("../config.json");

module.exports = (client, message, args) => {
  
  let date = message.user.createdAt;

  function formatDate(template, date) {
    var specs = "YYYY:MM:DD:HH:mm".split(":");
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
    return date
      .toISOString()
      .split(/[-:.TZ]/)
      .reduce(function(template, item, i) {
        return template.split(specs[i]).join(item);
      }, template);
  }

  const emojis = ['<:number0:749314440922660895>', '<:number1:749314460400877688>', '<:number2:749314474774888558>', '<:number3:749314491384070175>', '<:number4:749314508324864041>', '<:number5:749314524472934442>', '<:number6:749314541816643677>', '<:number7:749314559415812158>', '<:number8:749314574611644457>', '<:number9:749314598104072192>']
  const counter = message.guild.memberCount.toString().split("").map(i => emojis[i]).join(" ");
  client.channels.cache.get("747962403047735308").setTopic(`<a:baladinha:749317275663859855> Estamos com ${counter} nesse **BAILÃO**!!`);

  const embed = new MessageEmbed()
    .setDescription(`📤 **${message.user}** _**Saiu**_ no servidor.\n📅 Conta criada em: **${formatDate("DD/MM/YYYY, às HH:mm", date)}**`)
    .setColor(c.cor)
  return client.guilds.cache.get('747962402556870691').channels.cache.get("749397630836277278").send(embed)
};
