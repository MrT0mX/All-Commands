const fs = require("fs");
module.exports.config = {
	name: "brackup",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "song",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("song")==0 || event.body.indexOf("music")==0 || event.body.indexOf("sad")==0 || event.body.indexOf("গান")==0) {
		var msg = {
				body: "আমি একজন Messenger BOT আমার মালিক শিবলু  তোমার জন্য এ টোনটি রেখেছেন😽🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/bsong.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }