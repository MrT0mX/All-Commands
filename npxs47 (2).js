const fs = require("fs");
module.exports.config = {
	name: "npxs47",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs47",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🏃🏻‍♀")==0 || event.body.indexOf("👫🏻")==0 || event.body.indexOf("🏃🏻‍♂")==0 || event.body.indexOf("🚶🏻‍♂")==0) {
		var msg = {
				body: "•তুমি আমার আয়না,,,ওই আয়নাতে আমি আমাকে দেখতে পাই❤️🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs47.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }