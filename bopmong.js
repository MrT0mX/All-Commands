const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bopmong",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kaneki",
  description: "Bóp mông người bạn tag",
  commandCategory: "Lệnh 18+",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.imgur.com/rqmBde8.gif",
"https://i.imgur.com/O7v1JNm.gif",
"https://i.imgur.com/geB9zEW.gif",
"https://i.imgur.com/Zf3eX5Y.gif"
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` 𝗔𝗻𝗵 𝗕𝗼́𝗽 𝗠𝗼̂𝗻𝗴 𝗦𝘂̛𝗼̛́𝗻𝗴 𝗖𝗵𝘂̛𝗮 𝗘𝗺 🍑`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/bopmong.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bopmong.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/bopmong.gif")).on("close",() => callback());
   }