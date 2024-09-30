module.exports = {
    name: "userInfo",
    description: "Get the user information",

    async run(client, message) {
        message.reply(`Ton pseudo : ${message.author.username}\n
            Ton avatar : ${message.author.displayAvatarURL()}\n
            Ton tag : ${message.author.tag}\n
            Ton ID: ${message.author.id}\n
            Ton compte a été crée le : ${message.author.createdAt}\n
            Tu es sur le serveur : ${message.guild.name}\n`)
    }
}