module.exports.config = {
    name: "gachcard",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Kamisato Ayaka",
    description: "gạch card = bot, nhớ thay APIKey chỗ phần link",
    commandCategory: "Tiện ích",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": "",
        "axios": ""
    }
};
module.exports.run = async function ({ api, args, event, permssion }) {
    const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
  if(!args[0]) return api.sendMessage('𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗻𝗵𝗮̣̂𝗽 𝗻𝗵𝗮̀ 𝗺𝗮̣𝗻𝗴 ⚜️', threadID, messageID)
  else return api.sendMessage(`🔍 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝗹𝗼𝗮̣𝗶 𝘁𝗵𝗲̉: ${args.join(" ")}\n𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝗺𝗲̣̂𝗻𝗵 𝗴𝗶𝗮́ 💸`,event.threadID, (err, info) => {
     return global.client.handleReply.push({
         type: "menhgia",
        name: this.config.name,
        author: senderID,
        nhamang: args.join(" ").toUpperCase(),
        messageID: info.messageID
      });
  },event.messageID);
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
    if (handleReply.author != event.senderID) return;
    const {
        threadID,
        messageID,
        senderID
    } = event;

    switch (handleReply.type) {
      
    case "menhgia": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝗺𝗲̣̂𝗻𝗵 𝗴𝗶𝗮́ 𝗹𝗮̀ ${event.body}\n\n(𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗵𝗮̣̂𝗽 𝘃𝗮̀𝗼 𝘀𝗼̂́ 𝘀𝗲𝗿𝗶)`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "seri",
          name: 'gachcard',
        	  	author: senderID,
              nhamang: handleReply.nhamang,
        	  	menhgia: event.body,
            
        	  	messageID: info.messageID
        });
      },messageID)
    }
    case "seri": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗻𝗵𝗮̣̂𝗽 𝘀𝗼̂́ 𝘀𝗲𝗿𝗶 𝗹𝗮̀: ${event.body}\n\(𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝗺𝗮̃ 𝘁𝗵𝗲̉)`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "create",
          name: 'gachcard',
        	  	author: senderID,
                nhamang: handleReply.nhamang,
			    menhgia: handleReply.menhgia,
        	  	seri: event.body,
        	  	messageID: info.messageID
        });
      },messageID) 
    }
    
        case "create": {
              
      var nhamang = handleReply.nhamang;
      
      var menhgia = handleReply.menhgia;
      var seri = handleReply.seri;
          var mathe = event.body;
      
      api.unsendMessage(handleReply.messageID);
      api.sendMessage(`⏳ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗴𝘂̛̉𝗶 𝘁𝗵𝗲̉ 𝗹𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗔𝗨𝗧𝗢𝗖𝗔𝗥𝟮𝟳.𝗖𝗢𝗠`,threadID) 
   axios.get(`https://autocard27.com/api/card-auto.php?type=${nhamang}&menhgia=${menhgia}&seri=${seri}&pin=${mathe}&APIKey=dc8ef2021ec139574caf40f9ac4c0b6f&callback=http://localhost/callback.php&content=1233`).then(res => {
	api.sendMessage(`𝗧𝗿𝗮̣𝗻𝗴 𝘁𝗵𝗮́𝗶: ${res.data.data.status}\n𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${res.data.data.msg}`, event.threadID,event.messageID);
          });
                 }
        }
    }
 
 
//`https://www.phamvandienofficial.xyz/fbcover/v2?name=${noidung1}&id=${nhanvat}&subname=${noidung2}`