## Les liens discordapp peuvent être modifiés pour vous permettre de mettre vos propre gifs à la place
## Il ne faut pas oublier de regarder dans le fichier "config.json" pour pouvoir paramétrer le salon où vont apparaître les messages ainsi que le rôle
## Ces lignes sont à mettre dans le fichier "index.js" de votre Bot (donc à la raçine) tout en bas de votre code de préférence

client.on('guildMemberAdd', member =>{
    member.guild.channels.cache.get(config.greeting.channel).send(new Discord.MessageEmbed()
        .setTitle("Un membre nous a rejoint 😮")
        .setDescription(`${member} a rejoint le serveur ! Nous sommes maintenant ${member.guild.memberCount} ! :smiley:`)
        .setFooter('Développé par Saulcyy')
        .setColor('#00FF00')
        .addField('A voir en premier:',`Les règles ✅ \n L\'aide (${config.prefix}help) `)
        .setImage("https://cdn.discordapp.com/attachments/829322602220486699/832249693370581032/tenor.gif")
    
    )
    member.roles.add(config.greeting.role)
})

client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(new Discord.MessageEmbed()
    .setTitle("Un membre nous a quitté 😢")
    .setDescription(`${member.user.tag} a quitté le serveur... :sob:`)
    .setFooter('Développé par Saulcyy')
    .setColor("FF0000")
    .addField("Adieu", "Nous espérons te revoir un jour...😔")
    .setImage("https://cdn.discordapp.com/attachments/829322602220486699/832249695471403048/tenor1.gif")
    )
})
