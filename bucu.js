const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bucu",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Kaneki",
  description: "Bú cu người bạn tag",
  commandCategory: "Lệnh 18+",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.imgur.com/HlpnVnQ.gif",
"https://i.imgur.com/UL5ScKc.gif",
"https://i.imgur.com/sdBgEKV.gif",
"https://i.imgur.com/D2yvVco.gif",
"https://i.imgur.com/j6CzNg3.gif",
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` 𝗕𝘂́ 𝗰𝘂 𝗰𝗵𝗼 𝗮𝗻𝗵 𝗯𝗮̆́𝗻 𝗻𝗵𝗮𝗻𝗵 𝗻𝗮̀𝗼 😋`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/bucu.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bucu.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/bucu.gif")).on("close",() => callback());
   }