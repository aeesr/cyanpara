const Discord = require("discord.js");
const color = require("./colors.json");
const help = require("./helpcommand.js");

module.exports.success = (message, msg) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("Requested by " + message.author.tag, message.author.avatarURL)
    .setColor(color.green)
    .setTitle("Realizado!")
    .setDescription(msg)

    message.channel.send(embed);
}

module.exports.picture = (message, picture) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("Requested by " + message.author.tag, message.author.avatarURL)
    .setColor(color.purple)
    .setImage(picture)

    message.channel.send(embed);
}

module.exports.error = (message, error) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("Requested by " + message.author.tag, message.author.avatarURL)
    .setColor(color.red)
    .setTitle("An error has occured!")
    .setDescription(error)

    message.channel.send(embed);
}

module.exports.info = (message, msg) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("Requested by " + message.author.tag, message.author.avatarURL)
    .setColor(color.blue)
    .setDescription(msg)

    message.channel.send(embed);
}

module.exports.help = (message, msg) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("Requested by " + message.author.tag, message.author.avatarURL)
    .setTitle("Hola!")
    .setColor(color.blue)

    .setDescription("Amo a Futarou!")
    

    .addField(":seedling: Animales",
    help.command("cat", "Ver un gato") +
    help.command("shibe", "Ver un perro shibe") +
    help.command("dog", "Ver un perro"))

   .setColor(color.blue)

    message.channel.send(embed);
}