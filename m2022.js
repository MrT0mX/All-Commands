module.exports.config = {
    name: "m2022",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Yae Miko",
    description: "Tạo ra một avt tết",
    commandCategory: "Tạo ảnh",
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
	 if (this.config.credits != 'Yae Miko') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Đổi credits con cặc đjt mẹ mày luôn đấy con chó:))');
        return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"', threadID, messageID);
      } 
	else {
    return api.sendMessage(`Reply tin nhắn này để nhập họ và tên của bạn`, event.threadID, (err, info) => {
        return global.client.handleReply.push({
            type: "create",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
        });
    }, event.messageID);
}
} 
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    if (handleReply.author != event.senderID) return;
    const {
        threadID,
        messageID,
        senderID
    } = event;

    switch (handleReply.type) {
        
        case "create": {
            var hi = event.body;
            
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`⏳ Đang khởi tạo chương trình tạo ảnh!`,threadID, (err, info) => {
            setTimeout(() => {
            	api.unsendMessage(info.messageID);
            	var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/fbcover.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcover.png"),event.messageID);
                return request(encodeURI(`https://apiuwuapi.ducdz999.repl.co/m2022?name=${hi}&uid=${senderID}`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcover.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }} 