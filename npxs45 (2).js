const fs = require("fs");
module.exports.config = {
	name: "npxs45",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs45",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("👽")==0 || event.body.indexOf("🐥")==0 || event.body.indexOf("😱")==0 || event.body.indexOf("👩‍🦯")==0) {
		var msg = {
				body: "-মানুষ কথা দেয় শুধুমাত্র মূহুর্তকে সুন্দর করার জন‍্য!🙂",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs45.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }