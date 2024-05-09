 const fs = require("fs");
module.exports.config = {
	name: "npx37",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx37",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("নেইমার")==0 || event.body.indexOf("Brazil")==0 || event.body.indexOf("Neymar")==0 || event.body.indexOf("ব্রাজিল")==0) {
		var msg = {
				body: "আমি শিবলু বট আমি ব্রাজিল সার্পোট করি আর আপনি🇧🇷!✅✅ আমার মালিক শিবলুকে আমি অনেক সম্মান করি!💔😊",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx37.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🇧🇷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }