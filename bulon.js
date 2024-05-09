const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bulon",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Kaneki",
  description: "Bú lồn người bạn tag",
  commandCategory: "Lệnh 18+",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.imgur.com/WmrqMr3.gif",
"https://i.imgur.com/gJ93p6O.gif",
"https://i.imgur.com/lTUOjmw.gif",
"https://i.imgur.com/yNuZqq7.gif",
"https://i.imgur.com/CGLZqsc.gif",
"https://i.imgur.com/dTFod8l.gif",
"https://i.imgur.com/v0zsCuG.gif",
"https://i.imgur.com/3mZ09sV.gif",
"https://i.imgur.com/IOotDGI.gif",
"https://i.imgur.com/JTyMIhW.gif",
"https://i.imgur.com/OlVM1zX.gif",
"https://i.imgur.com/82P5x1d.gif"
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` 𝗡𝘂̛𝗼̛́𝗰 𝗘𝗺 𝗧𝘂𝗼̂𝗻𝗴 𝗥𝗮 𝗡𝗵𝘂̛ 𝗦𝗼̂𝗻𝗴 𝗠𝗲𝗸𝗼𝗻𝗴 𝗭𝗮̣̂𝘆𝘆 😋`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/buslon.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/buslon.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/buslon.gif")).on("close",() => callback());
   }