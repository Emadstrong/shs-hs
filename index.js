const { Client,Discord } = require('discord.js-selfbot-v13');
const client = new Client(); 

client.on('ready', () => {
  console.log(client.user.tag)
})
const {userAccount} = require("sphinx-run");
new userAccount(client, Discord).autoReaction({
    channel: '1216882784048775300',
    user: '1215434937553911899',
    customBotId: ['824119071556763668']
});
client.login(process.env.token);
const express = require("express");
const app = express();
app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});
//byMoDcA
