const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
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
 
client.login(process.env.BOT_TOKEN);
      
});
