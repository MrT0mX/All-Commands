const fs = require("fs");
module.exports.config = {
	name: "😍",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😍🥰😘",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😘")==0 || event.body.indexOf("i love you")==0 || event.body.indexOf("😍")==0 || event.body.indexOf("🥰")==0) {
		var msg = {
				body: "ভা্ঁবা্ঁসা্ঁ তো্ঁমা্ঁর্ঁ পু্ঁক্কি্ঁ দি্ঁয়ে্ঁ ব্ঁরে্ঁ দিব্ঁ 🤣😹🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx7.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }