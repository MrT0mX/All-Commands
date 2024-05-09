const fs = require("fs");
module.exports.config = {
	name: "npxms8",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxms8",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("✂️")==0 || event.body.indexOf("📌")==0 || event.body.indexOf("🙆🏻‍♀")==0 || event.body.indexOf("🐣")==0) {
		var msg = {
				body: "-Tor prite pagol hoilam re ..!!💔 ★Thank you for. Auto Replied★Bot Developer Mohammad SHiblu Bhai  Emoji File Creator SHibluBhai  ★Support Email:- MrTomXxX7@gmail.com & Facebook Page Link:- https://www.facebook.com/MrTomXxX",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxms8.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("👊🏻", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }