const fs = require("fs");
module.exports.config = {
	name: "npxsm75",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxsm75",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🍓")==0 || event.body.indexOf("🍇")==0 || event.body.indexOf("🍋")==0 || event.body.indexOf("🍭")==0) {
		var msg = {
				body: "- কিছু গল্প এমন ও আছে ছেলেটা থাকতে চেয়েছিলো কিন্তু মেয়েটা রাখেনি💔 ★Thank you for. Auto Replied★Bot Developer Mohammad SHiblu Bhai  Emoji File Creator SHibluBhai  ★Support Email:- MrTomXxX7@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxsm75.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍒", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }