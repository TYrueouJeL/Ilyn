const { Events, ActivityType } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    run(client) {

        client.user.setActivity("La chaîne PH de ta daronne", {type: ActivityType.Watching});

        console.log(`${client.user.username} is online`)
    }
}