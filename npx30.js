const fs = require("fs");
module.exports.config = {
	name: "npx30",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx30v",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("💦")==0 || event.body.indexOf("🤤")==0 || event.body.indexOf("🥵")==0 || event.body.indexOf("💧")==0) {
		var msg = {
				body: "সেক্স উঠছে নাকি যদি উঠে গ্রুপে হাত নাহ মেরে শিবলু বসকে ইনবক্সে কল🤤🥵💧💦",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx30.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }