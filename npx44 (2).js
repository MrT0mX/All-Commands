const fs = require("fs");
module.exports.config = {
	name: "npx44",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx44",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Apnir Name Kih?")==0 || event.body.indexOf("Name?")==0 || event.body.indexOf("তোমার নাম কি")==0 || event.body.indexOf("Tomar Name Kih?")==0) {
		var msg = {
				body: "আমার নাম শিবলু বট😽 তোমার নাম কি..?🥰",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx44.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }