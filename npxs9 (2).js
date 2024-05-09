const fs = require("fs");
module.exports.config = {
	name: "npxs9",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs9",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🫢")==0 || event.body.indexOf("😐")==0 || event.body.indexOf("🤗")==0 || event.body.indexOf("☺️")==0) {
		var msg = {
				body: "আহা সোনা গো আমার তোমার কি ক্যালসিয়ামের অভাব হাত মারা বাদ দিয়ে বিয়ে করে ফেলো😹",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs9.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }