const fs = require("fs");
module.exports.config = {
	name: "😱",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😱",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😮")==0 || event.body.indexOf("🦶")==0 || event.body.indexOf("🦴")==0 || event.body.indexOf("🗣️")==0) {
		var msg = {
				body: "মিথ্যে কত আজব তাইনা? অন্যকে বলতে ভালো লাগে কিন্তু নিজেকে বললে রাগ হয়।💚🥰",
				attachment: fs.createReadStream(__dirname + `/noprefix/music2.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }