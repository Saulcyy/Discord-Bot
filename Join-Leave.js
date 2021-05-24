bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '👋🏻-𝗔𝗿𝗿𝗶𝘃𝗲́𝗲𝘀');
    if (!channel) return;
    channel.send(`Bienvenue ${member} dans le Discord de Saulcyy !`);
    member.send("Bienvenue sur le serveur Discord de Saulcyy, n'hésites pas à faire un passage lecture des règles :) !")
    member.roles.add("780185993210626099");
});

bot.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '🏃🏻-𝗗𝗲́𝗽𝗮𝗿𝘁𝘀');
    if (!channel) return;
    channel.send(`**${member.user.username}** vient de quitter le Discord !`);
});


bot.on('message', async message => {

    if (message.author.bot) return;
