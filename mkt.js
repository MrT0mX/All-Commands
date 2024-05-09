module.exports.config = {
    name: "mkt",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Yae Miko",
    description: "Tạo banner kiểu marketing",
    commandCategory: "Tạo ảnh",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": "",
        "axios": ""
    }, 
	envConfig: {
        APIKEY: "Yae Miko"
	}  
};
 
module.exports.run = async function ({ api, args, event, permssion }) {
    const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
	  
    return api.sendMessage(`𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝘁𝗲̂𝗻 𝗰𝗵𝗶́𝗻𝗵 🌸`, event.threadID, (err, info) => {
        return global.client.handleReply.push({
            type: "text1",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
        });
    }, event.messageID);
} 
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    var nameSender = (await Users.getData(event.senderID)).name
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
    if (handleReply.author != event.senderID) return;
    const {
        threadID,
        messageID,
        senderID
    } = event;

    switch (handleReply.type) {
          
        case "text1": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍 𝗯𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝘁𝗲̂𝗻 𝗰𝗵𝗶́𝗻𝗵 𝗹𝗮̀: ${event.body}\n(𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗵𝗮̣̂𝗽 𝘃𝗮̀𝗼 𝘁𝗲̂𝗻 𝗽𝗵𝘂̣ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻) 🌸`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'text2',
        	  	name: 'mkt',
        	  	author: senderID,
        	  	text1: event.body,
        	  	messageID: info.messageID
        	  })
        	}, messageID);
        }
        case "text2": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝘁𝗲̂𝗻 𝗽𝗵𝘂̣ 𝗹𝗮̀: ${event.body}\n(𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝘃𝗮̀𝗼 𝗲𝗺𝗮𝗶𝗹 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻) 🌸`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'text3',
        			name: 'mkt',
        			author: senderID,
        			text1: handleReply.text1,
        			text2: event.body,
        			messageID: info.messageID
        		})
        	}, messageID);
        }
        case "text3": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝗲𝗺𝗮𝗶𝗹 𝗹𝗮̀ ${event.body}\n(𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗵𝗮̣̂𝗽 𝘃𝗮̀𝗼 𝗽𝗵𝗼𝗻𝗲 𝗻𝘂𝗺𝗯𝗲𝗿 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻) 🌸`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'text4',
        			name: 'mkt',
        			author: senderID,
        			text1: handleReply.text1,
        			text2: handleReply.text2,
              text3: event.body,
        			messageID: info.messageID
        		})
        	}, messageID);
        }
        case "text4": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝗽𝗵𝗼𝗻𝗲 𝗻𝘂𝗺𝗯𝗲𝗿 𝗹𝗮̀: ${event.body}\n(𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗵𝗮̣̂𝗽 𝘃𝗮̀𝗼 𝗻𝗼̛𝗶 𝗼̛̉ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻) 🌸`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'create',
        			name: 'mkt',
        			author: senderID,
        			text1: handleReply.text1,
        			text2: handleReply.text2,
              text3: handleReply.text3,
              text4: event.body,
        			messageID: info.messageID
        		})
        	}, messageID);
        }
         
        case "create": {
            var text1 = handleReply.text1;
            var text2 = handleReply.text2;
            var text3 = handleReply.text3;
            var text4 = handleReply.text4;
            var text5 = event.body;
            
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`🌸 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝗯𝗼𝘁 𝘁𝗮̣𝗼 𝗮̉𝗻𝗵 🌸`,threadID, (err, info) => {
            setTimeout(() => {
            	api.unsendMessage(info.messageID);
            	var callback = () => api.sendMessage({body:`𝗔̉𝗻𝗵 𝗯𝗶̀𝗮 𝗺𝗮𝗿𝗸𝗲𝘁𝗶𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🌸\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${nameSender}\n𝗨𝗜𝗗: ${event.senderID}\n𝗘𝗺𝗮𝗶𝗹: ${text3}\n𝗦𝗗𝗧: ${text4}\n𝗡𝗼̛𝗶 𝗼̛̉: ${text5}\n𝗧𝗲̂𝗻 𝗰𝗵𝗶́𝗻𝗵: ${text1}\n𝗧𝗲̂𝗻 𝗽𝗵𝘂̣: ${text2}`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/mkt.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcover.png"),event.messageID);
                return request(encodeURI(`https://apiuwuapi.ducdz999.repl.co/mkt?uid=${event.senderID}&text1=${text1}&text2=${text2}&fb=${nameSender}&ma=${text3}&tl=${text4}&lc=${text5}`)).pipe(fs.createWriteStream(__dirname + '/cache/mkt.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }}