module.exports.config = {
    name: "cardinfo",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "TuanDz",
    description: "Tạo cardinfo",
    commandCategory: "Tạo ảnh",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": "",
        "axios": ""
    }, 
	envConfig: {
        APIKEY: "tuandz"
	}  
};
 
module.exports.run = async function ({ api, args, event, permssion }) {
    const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
	  
    return api.sendMessage(`🌸 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝘁𝗲̂𝗻 𝗰𝗵𝗶́𝗻𝗵 🌸`, event.threadID, (err, info) => {
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
        	return api.sendMessage(`🔍 𝗯𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝘁𝗲̂𝗻 𝗰𝗵𝗶́𝗻𝗵 𝗹𝗮̀: ${event.body}\n(𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗵𝗮̣̂𝗽 𝘃𝗮̀𝗼 𝗴𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻) 🌸`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'text2',
        	  	name: 'cardinfo',
        	  	author: senderID,
        	  	text1: event.body,
        	  	messageID: info.messageID
        	  })
        	}, messageID);
        }
        case "text2": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝗴𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵 𝗹𝗮̀: ${event.body}\n(𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝘃𝗮̀𝗼 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻) 🌸`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'text3',
        			name: 'cardinfo',
        			author: senderID,
        			text1: handleReply.text1,
        			text2: event.body,
        			messageID: info.messageID
        		})
        	}, messageID);
        }
        case "text3": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗹𝗮̀ ${event.body}\n(𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗵𝗮̣̂𝗽 𝘃𝗮̀𝗼 𝗻𝗼̛𝗶 𝗼̛̉ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻) 🌸`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'text4',
        			name: 'cardinfo',
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
        	return api.sendMessage(`🔍 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝗻𝗼̛𝗶 𝗼̛̉ 𝗹𝗮̀: ${event.body}\n(𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗵𝗮̣̂𝗽 𝘃𝗮̀𝗼 𝗰𝗵𝘂̛̃ 𝗸𝘆́ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻, 𝗻𝗵𝗮̣̂𝗽 𝗸𝗵𝗼̂𝗻𝗴 𝗱𝗮̂́𝘂 𝘁𝗿𝗮́𝗻𝗵 𝗹𝗼̂̃𝗶 𝗳𝗼𝗻𝘁) 🌸`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'create',
        			name: 'cardinfo',
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
            	var callback = () => api.sendMessage({body:`🌸 𝗔̉𝗻𝗵 𝗖𝗮𝗿𝗱 𝗜𝗻𝗳𝗼 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🌸\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${nameSender}\n𝗨𝗜𝗗: ${event.senderID}\n𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲: ${text3}\n𝗡𝗼̛𝗶 𝗼̛̉: ${text4}\n𝗖𝗵𝘂̛̃ 𝗸𝘆́: ${text5}\n𝗧𝗲̂𝗻 𝗰𝗵𝗶́𝗻𝗵: ${text1}\n𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: ${text2}`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/info.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/info.png"),event.messageID);
                return request(encodeURI(`https://apiuwuapi.ducdz999.repl.co/cardinfo?location=${text4}&name=${text1}&gender=${text2}&vanity=${text3}&uid=${event.senderID}&chuky=${text5}`)).pipe(fs.createWriteStream(__dirname + '/cache/info.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }}