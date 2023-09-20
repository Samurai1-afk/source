const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
const firebase = require("firebase");

client.config = config;

fs.readdir("./Eventos/", (err, files) => {
  if (err) return console.error(err);

  files.forEach(file => {
    const event = require(`./Eventos/${file}`);
    let eventName = file.split(".")[0];
    console.log(`[LOGS] Evento Carregado: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./Comandos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./Comandos/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[LOGS] Comando Carregado: ${commandName}`);
    client.commands.set(commandName, props);
  });
});

const firebaseConfig = {
  apiKey: "AIzaSyBp4L2BHUZ-dNrpFFt54IgFe6LuE7XTpyw",
  authDomain: "Tiolucazz-1dffd.firebaseapp.com",
  databaseURL: "https://Tiolucazz-1dffd.firebaseio.com",
  projectId: "Tiolucazz-1dffd",
  storageBucket: "Tiolucazz-1dffd.appspot.com",
  messagingSenderId: "912500146822",
  appId: "1:912500146822:web:a6d8795dd5df3b27dcc707",
  measurementId: "G-KE7KVEV654"
};
firebase.initializeApp(firebaseConfig);

client.login(config.token);
