const { MessageEmbed } = require("discord.js");
const moment = require("moment");
moment.locale("pt-br");
const c = require("../config.json");
const firebase = require("firebase");
const database = firebase.database();

module.exports = async (client, message, args) => {
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

  message.roles.add("748624067783032992").catch(() => {});
  message.roles.add("748624596491698267").catch(() => {});

  const embed = new MessageEmbed()
    .setDescription(`📥 **${message.user}** _**Entrou**_ no servidor.\n📅 Conta criada em: **${formatDate("DD/MM/YYYY, às HH:mm", date)}**`)
    .setColor(c.cor)
    client.guilds.cache.get('747962402556870691').channels.cache.get("749397630836277278").send(embed)

  const dm = new MessageEmbed()
    .setAuthor(client.user.username + " | Bem Vindo", client.user.displayAvatarURL())
    .setDescription(`**<a:baladinha:749317275663859855> Olá _${message}_, É um prazer vê-lo(la) aqui na __BLD__.**

_**Registro:**_
🗃 Canal: **<#>**

_**Regras:**_
🗃 Canal: **<#749392688117317662>**

**\`-\` Seja Bem Vindo(a)! E divirta-se __${message.user.username}__.**`)
    .setThumbnail(message.user.displayAvatarURL())
    .setColor(c.cor);
  message.send(dm).catch(O_o => {});

  let canal = client.channels.cache.get("747962403047735308");
  canal.send(`**<a:baladinha:749317275663859855> _${message}_, Bem vindo(a) á __BLD__!**\n_**\`-\` Registre-se em **<#>**.**_`);

  /* ALTERAÇÕES */

  database
    .ref(`Baladinha/Usuários/${message.user.id}`)
    .once("value")
    .then(async function(snap) {
      if (snap.val() == null) {
        database.ref(`Baladinha/Usuários/${message.user.id}`).set({
          User: message.user.id,
          Level: 1,
          Xp: 0,
          Mutado: 0
        });
      } else if (snap.val().Mutado === 1) {
      
          message.roles.add("749299624531198083").catch(O_o => {});

      }
    });
};