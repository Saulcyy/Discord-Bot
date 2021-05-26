const Discord = require("discord.js");

module.exports = {
    run: message =>{
        let user = message.mentions.users.first();
        if(!user) user = message.author;
        message.channel.send(new Discord.MessageEmbed()
        .setImage(user.displayAvatarURL({dynamic : true}))
        .setFooter("Développé par Saulcyy")

        )
    },
    name: "avatar"
}