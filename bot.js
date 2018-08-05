const Discord = require("discord.js");
const client = new Discord.Client();
var Canvas = require('canvas');// npm i canvas
var jimp = require('jimp');// npm i jimp
const fs = require("fs");// npm i fs
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`3oooo 👻`,"http://twitch.tv/sytra_ayman")
  
         client.on("guildMemberAdd", member => {
    var moment = require("moment");
 
                    let modlog2 = client.channels.find('name', 'chat');
 
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     modlog2.send({embed:heroo}); 
});
 
      client.on('guildMemberAdd', member => {
      const welcomer =  member.guild.channels.find('name', 'chat');//اسم الروم الي يرحب فيه
 
      var Canvas = require('canvas')
      var jimp = require('jimp')
 
      const w = ['./img/w1.png',
      './img/w2.png',
      './img/w3.png',
      './img/w4.png',
      './img/w5.png',
      './img/w6.png',
      './img/w7.png'];
 
              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 2;
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 401, 202);
 
      })
 
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
 
                             
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.drawImage(ava, 152, 27, 95, 95);
 
                                                      //wl
                              ctx.font = '20px Arial Bold';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                                         ctx.fillText(member.user.username, 200, 154);
 
                              //NAME
                              ctx.font = '20px Arial';
                              ctx.fontSize = '25px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                    ctx.fillText(`You are the member No: ${member.guild.memberCount} `
                              , 200, 190);
 
welcomer.sendFile(canvas.toBuffer())
 
 
 
      })
      })
      });
  });

client.on("guildMemberAdd", (member) => {
let channel = member.guild.channels.get("471861902084145165");
if (!channel) {
console.log("!the channel id it's not correct");
return;
}
if (member.id == client.user.id) {
return;
}
console.log('-');
var guild;
while (!guild)
guild = client.guilds.get("471359026672828426");
guild.fetchInvites().then((data) => {
data.forEach((Invite, key, map) => {
var Inv = Invite.code;
if (dat[Inv])
if (dat[Inv] < Invite.uses) {
client.guild.channels.get('475233806677442560').send(`welcome To ${member.guild.name}\nتم دعوته بواسطة  ${Invite.inviter} `) ;       
}
dat[Inv] = Invite.uses;
});
});
});
client.login(process.env.BOT_TOKEN);
