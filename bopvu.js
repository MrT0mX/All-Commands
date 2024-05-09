const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bopvu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kaneki",
  description: "Bóp vú người bạn tag",
  commandCategory: "Lệnh 18+",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.imgur.com/aARuNTD.gif",
"https://i.imgur.com/zvM4ghU.gif",
"https://i.imgur.com/r05obSo.gif",
"https://i.imgur.com/q1vHUtK.gif",
"https://i.imgur.com/2txgXJ7.gif",
"https://i.imgur.com/WK1bcgk.gif",
"https://i.imgur.com/pVxgLLp.gif"
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` 𝗔𝗻𝗵 𝗕𝗼́𝗽 𝗩𝘂́ 𝗡𝘂̛́𝗻𝗴 𝗖𝗵𝘂̛𝗮 𝗖𝘂̣𝗰 𝗖𝘂̛𝗻𝗴  😝`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/bopvu.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bopvu.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/bopvu.gif")).on("close",() => callback());
   }