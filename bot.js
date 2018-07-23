const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "^";
client.on('ready', () => {
client.user.setGame(' KND GAMES  ','https://www.twitch.tv/sytra_ayman');
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'سيطره') {
        message.reply('عيووووووونه');
      }
    
    client.on('message', message => {
    if (message.content === 'الشعار') {
        message.reply('** Ӄᴎ∂⍣㦵 | الشعار في آقاريو   || ! KND , | آلشعار في الديسكورد **');
      }
        
        client.on('message', message => {
    if (message.content === 'السلام عليك') {
        message.reply('**وعڵيڪم ٱڵسڵٱم ورحمهہ ٱڵڵهہ وبرڪٱتهہ**');
      }
    
        client.on('message', message => {
    if (message.content === 'باك') {
        message.reply('**ﯟڸــگــمۘ نۨــﯣڕټ ڀــٰا̍ڠــٰٱ̍ڸــﮯ**');
      }
            
            client.on('message', message => {
    if (message.content === 'برب') {
        message.reply('**ٺــﯧْــٺ , ﷲ مــ؏ــک**');
      }
            
client.on('message', message => {
    if (message.content === 'التاق') {
        message.reply('** Ӄᴎ∂⍣㦵 | الشعار في آقاريو   || ! KND , | آلشعار في الديسكورد **');
      }
          });
client.login(process.env.BOT_TOKEN);
