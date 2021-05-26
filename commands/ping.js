const Discord = require("discord.js")

module.exports = {
    run: message => {
        const timestamp = (message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp;
        message.channel.send(new Discord.MessageEmbed()
        .setColor('#9B59B6')
        .setTitle(`Ping`)
        .setAuthor(message.member.displayName, message.author.displayAvatarURL())
        .setDescription("Informations liées au ping :")
        .setFooter('Développé par Saulcyy')
        .addField("Pong !",  "🏓")
        .addField("Latence Bot => Discord :", `${Math.floor(message.createdTimestamp - timestamp)}ms`)
        .addField("Latence de l'API :", `${Math.round(message.client.ws.ping)}ms`)
                )},
                name: "ping"
             };