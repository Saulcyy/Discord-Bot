const Discord = require("discord.js");

module.exports = {
    run: message => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.delete
            if (message.mentions.users.first()) {
                user = message.mentions.users.first();
            } else {
                user = message.author;
            }
            const member = message.guild.member(user);
    
            const embed = new Discord.MessageEmbed()
                .setColor('#ff5555')
                .setThumbnail(user.avatarURL)
                .setTitle(`Information sur ${user.username}#${user.discriminator} :`)
                .setFooter("Développé par Saulcyy")
                .addField('ID du compte:', `${user.id}`, true)
                .addField('Pseudo sur le serveur :', `${member.nickname ? member.nickname : 'Aucun'}`, true)
                .addField('A crée son compte le :', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
                .addField('A rejoint le serveur le :', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
                .addField('Status:', `${user.presence.status}`, true)
                .addField('Joue a :', `${user.presence.game ? user.presence.game.name : 'Rien'}`, true)
                .addField('Roles :', member.roles.cache.map(roles => `${roles.name}`).join(', '), true)
                .addField(`En réponse a :`, `${message.author.username}#${message.author.discriminator}`)
                message.channel.send(embed);
        }
      },
name: "userinfo"
    }
