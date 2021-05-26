const Discord = require("discord.js");

module.exports = {
    run: message => {
    if (!message.guild.member(message.author).hasPermission("KICK_MEMBER")) return;
    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.member(user);
        if (member) {
            member
                .kick('Kick')
                .then(() => {
                    message.reply(`**${user.tag} a bien été kick ✅ !**`);
                })
                .catch(err => {
                    message.reply('Je ne peux pas kick cet utilisateur !');
                    console.error(err);
                    utilisateur.send(`Tu as été kick du serveur **${message.guild.name}**\nRaison : ${(raison ? `${raison}` : 'Aucune')}`)
                });
        } else {
            message.reply("Cet utilisateur ne ce trouve pas dans le serveur Discord");
        }
    } else {
        message.reply("Vous avez oublié de mentionné l'utilisateur à kick");
      }
    },
    name: "kick"
  }
