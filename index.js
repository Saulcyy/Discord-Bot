## À partir de la ligne 6 ; Vous pouvez faire des retours à la ligne pour mettre vos modules : moment = require("moment") etc etc etc. . .

const Discord = require('discord.js');
    client = new Discord.Client({
      fetchAllMembers: true
    }),
Token = require('./token.json')
client.login(Token.token)
client.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) =>{
  if(err) throw err
      files.forEach(file =>{
          if(!file.endsWith('.js')) return
          const command = require(`./commands/${file}`)
          client.commands.set(command.name, command)
      })
})

client.on('ready', async () => {
    console.log('Je suis en ligne !');
    client.user.setActivity('VOTRE STATUT');
});

client.on('message', message => {
    if(message.type !== 'DEFAULT' || message.author.bot) return
  
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if(!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if(!command) return
    if(command.guildOnly && !message.guild) return message.channel.send("Cette commande n'est utilisable que dans un serveur !")
    command.run(message, args, client)
  })
