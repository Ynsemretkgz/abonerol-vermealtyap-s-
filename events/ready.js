const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`Aktif Edildin!`);
  console.log(`Komutlar Aktifleştirildi!`);
  client.user.setStatus("dnd");
  client.user.setActivity(`${prefix}yardım | v12 halimle çok iyiyim :))))`)
  console.log(`Discorda göre istatistiklerim: ` + client.channels.cache.size + ` adet kanala, ` + client.guilds.cache.size + ` adet sunucuya ve ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kişiye hizmet mi veriyor muşum bennn`);
}