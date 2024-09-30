module.exports = {
    name: "serverInfo",
    description: "Get information about the guild",

    async run(client, message) {
        message.reply(`Nom du serveur : ${message.guild.name}\n
            Roles du serveur : ${message.guild.roles.cache.size}\n
            Nombre de membres : ${message.guild.memberCount}\n
            Nombre de salons : ${message.guild.channels.cache.size}\n
            Crée le : ${message.guild.createdAt}\n`)
    }
}