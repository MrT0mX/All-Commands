const fs = require("fs");
module.exports.config = {
	name: "npx43",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx43",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bd")==0 || event.body.indexOf("BD")==0 || event.body.indexOf("Bangladesh")==0 || event.body.indexOf("বাংলাদেশ")==0) {
		var msg = {
				body: "আমি শিবলু বট 😌 🇧🇩 বাংলাদেশ আমার গর্ব আমার অহংকার 🇧🇩",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx43.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🇧🇩", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }