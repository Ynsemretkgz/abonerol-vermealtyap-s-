const Discord = require("discord.js");
const db = require("wio.db");

exports.run = async (client, message, args) => {
  if (!message.member.roles.cache.has("793390445387448321"))// rolü verecek id
    return message.channel.send(      
      `Bu komutu kullanabilmek için \`Abone Yetkilisi\` rolüne sahip olmasınız.`
    );
  let codsupabonealansayı = db.fetch(`abonerolsayı_${message.author.id}`) || '0'

  let yunusemre = message.mentions.users.first();
  if (!yunusemre)
    return message.channel.send("Ben Boşluğa Rol Veremiyoru Birisini Etiketlermisin ?");
  let rol = message.mentions.roles.first();
  let member = message.guild.member(yunusemre);
  member.roles.add("793390367831490587"); //abone rolü idsi
  let cosupçalma = new Discord.MessageEmbed()
   .setTitle("Tebrikler Başarıyla Abone Rolünü Elde Ettin")
        .setColor('RANDOM')
        .setDescription(`${message.author} **:** Abone Rolü Verme Sayısı: **${codsupabonealansayı ? `${codsupabonealansayı}` : "0"}**`)
        .addField("Rolü Veren Yetkili", `${message.author}`, true)
        .addField("Rolü Alan Kullanıcı", `${yunusemre}`, true)
        .setColor("#7f00ff")
        .setTimestamp();

  let logcukkanalcodsup = client.channels.cache.get("783651357075963914")// galeri kanal idsi
     if (!logcukkanalcodsup) return message.channel.send("Bu kanalda abone rolü verlilemez!");
     logcukkanalcodsup.send(cosupçalma)
  db.add(`abonerolsayı_${message.author.id}`, 1)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["abone"],
  kategori: "abone",
  permLevel: 0
};

exports.help = {
  name: "a",
  description: "Kullanıcıya Abone Rolü Verir.",
  usage: "a"
};