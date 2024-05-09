const fs = require("fs");
module.exports.config = {
	name: "npxs30",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs30",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Mode off")==0 || event.body.indexOf("Mon kharap")==0 || event.body.indexOf("Mon valo na")==0 || event.body.indexOf("Kharap lagse")==0) {
		var msg = {
				body: "- আমি একজন মেসেঞ্জার বট।❤️ আমি বুঝতে পারছি তোমার মন খারাপ।🥺আসলে সব ঝামেলা আমাদের এই প্রিয় জিনিস নিয়া...💔🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs30.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }