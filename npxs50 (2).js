const fs = require("fs");
module.exports.config = {
	name: "npxs50",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs50",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("/hi")==0 || event.body.indexOf("/song")==0 || event.body.indexOf("🍎")==0 || event.body.indexOf("🍆")==0) {
		var msg = {
				body: "•এটা আমাদের মানতেই হবে🙂 একটা নারী কখনো এক পুরুষের প্রশংসায় সন্তুষ্ট থাকে না 😴🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs50.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }