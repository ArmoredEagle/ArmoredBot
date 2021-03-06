module.exports = async(client, message, args) => {
    /**
     * Shortcut to enable the farewell
     * @param {Client} client The bot instance
     * @param {Object} message The message which triggered this shortcut
     * @param {Array} args The splitted arguments
     */
    return new Promise(async(resolve, reject) => {
        const guildEntry = client.guildData.get(message.guild.id);
        if (guildEntry.onEvent.guildMemberRemove.farewell.enabled) return resolve(message.channel.createMessage(`:x: The farewell system is already enabled`))
        guildEntry.onEvent.guildMemberRemove.farewell.enabled = true;
        client.guildData.set(message.guild.id, guildEntry);
        resolve(await message.channel.createMessage(`:white_check_mark: Alright, the farewell is now enabled`));
    });
}