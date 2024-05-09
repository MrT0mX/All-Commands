const fs = require("fs");
module.exports.config = {
	name: "npxs10",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs10",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("💞")==0 || event.body.indexOf("🤍")==0 || event.body.indexOf("💓")==0 || event.body.indexOf("💖")==0) {
		var msg = {
				body: "আহা এতো ভালোবাসা দিয়ো না গো🙂এতো ভালোবাসা রাখার জায়গা আমার বুকের ভিতর নাই 😉",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs10.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }