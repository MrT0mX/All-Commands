const fs = require("fs");
module.exports.config = {
	name: "npxs59",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs59",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("💓")==0 || event.body.indexOf("💗")==0 || event.body.indexOf("😍")==0 || event.body.indexOf("🥰")==0) {
		var msg = {
				body: "-Facebook...এর প্রেম গুলি হয়তো ফেইক হয় কিন্তু এই প্রেম কিছু কিছু মানুষকে খুব বেশিই কাঁদায়😢😢MESSENGER BOT INFORMATION BOT OWNER : SHIBLU BHAI Thank you for.(Auto Replied)  *My Owner info & Any Problem Contact :- MrTomXxX7@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs59.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }