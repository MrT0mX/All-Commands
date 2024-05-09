const fs = require("fs");
module.exports.config = {
	name: "ucif",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "maliha",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("maliha")==0 || event.body.indexOf("Maliha")==0 || event.body.indexOf("MALIHA")==0 || event.body.indexOf("মালিহা")==0) {
		var msg = {
				body: "🙈",
				attachment: fs.createReadStream(__dirname + `/noprefix/dk.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }