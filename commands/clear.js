const Discord = require("discord.js");

module.exports = {
  run: async (message, args) => {
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'exécuter cette commande.")
      const count = args[0]
      if(!/\d+/.test(count)) return message.channel.send("Veuillez indiquer un nombre de messages à effacer.")
      if(count < 1 || count > 99) return message.channel.send("Le nombre de messafes à effacer doit être compris entre 1 et 99.")
      const {size} = await message.channel.bulkDelete(Number(count) + 1, true)
      message.channel.send(`${size - 1} messages ont été effacés ! 😀`).then(sent => sent.delete({timeout: 5e3}))
  },
  name: "clear",
  guildOnly: true,
  help: {
    description: "Cette commande efface le nombre de messages souhaités.",
    syntaxe: '<clear> [quantité]'
  }

}