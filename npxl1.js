const fs = require("fs");
module.exports.config = {
	name: "love1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "love",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("love")==0 || event.body.indexOf("ভালোবাসি")==0 || event.body.indexOf("love you")==0 || event.body.indexOf("turo love")==0) {
		var msg = {
				body: "আমি একজন Messenger BOT. আমার মালিক শিবলু  তোমার জন্য এটা রাখছে😽🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxl1.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }