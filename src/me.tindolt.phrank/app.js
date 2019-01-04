const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = "NTE4NTk2NjY1ODEzNDk5OTE3.DuTHvw.nS4ZkxbQy_jna07DthyWcCPqqyI";

//Bot Login
bot.login(TOKEN);
//Bot Prefix
var prefix = '#';
//Ready Log Check
bot.on('ready', function(){
    console.log("Ready for action!");
});
