const { Client,Discord } = require('discord.js-selfbot-v13');
const client = new Client(); 

client.on('ready', () => {
  console.log(client.user.tag)
})
const {userAccount} = require("sphinx-run");
new userAccount(client, Discord).autoReaction({
    channel: 'channel ID',
    user: 'user ID',
    customBotId: ['user Bot ID']
});
client.login(process.env.token);
const express = require("express");
const app = express();
app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});
//byMoDcA