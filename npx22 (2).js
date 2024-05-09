const fs = require("fs");
module.exports.config = {
	name: "npx22",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx22v",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😹")==0 || event.body.indexOf("🤣")==0 || event.body.indexOf("😂")==0 || event.body.indexOf("😁")==0) {
		var msg = {
				body: "এ্ঁতো্ঁ হা্ঁসো্ঁ কে্ঁনো্ঁ মেয়ে হলে শিবলু কে জামাই ডাকো😎😂😁",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx22.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }