const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "đá",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Diluc",
  description: "Đá người bạn tag",
  commandCategory: "Hành Động",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.imgur.com/qgnMrk4.gif",
"https://i.imgur.com/s5FBQsZ.gif",
"https://i.imgur.com/LwB6hhT.gif",
"https://i.imgur.com/P5Gh6LB.gif"
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` 𝗕𝗮̣𝗻 𝘁𝗵𝗮̣̂𝘁 𝗹𝗮̀ 𝘅𝗮̀𝗺 𝗹𝗼̂̀𝗻 𝗺𝗶̀𝗻𝗵 𝘅𝗶𝗻 𝗽𝗵𝗲́𝗽 𝘀𝘂́𝘁 𝗰𝗵𝗲̂́𝘁 𝗰𝗼𝗻 𝗺𝗲̣ 𝗯𝗮̣𝗻 𝗻𝗵𝗲́ 🎀`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/spair.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/spair.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/spair.gif")).on("close",() => callback());
   }