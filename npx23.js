const fs = require("fs");
module.exports.config = {
	name: "npx23",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx23v",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😒")==0 || event.body.indexOf("😤")==0 || event.body.indexOf("🤬")==0 || event.body.indexOf("😾")==0) {
		var msg = {
				body: "কি হইছে সোনা রাগ করো কেন শিবলু কে ভালোবাসে ফেলো😒😤",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx23.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😒", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }