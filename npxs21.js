const fs = require("fs");
module.exports.config = {
	name: "npxs21",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs21",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😳")==0 || event.body.indexOf("🤯")==0 || event.body.indexOf("🥶")==0 || event.body.indexOf("😠")==0) {
		var msg = {
				body: "কি গো চমকে গেলে নাকি আমাকে দেখে🫢😹 যাবাই তো আমি মানেই আতঙ্ক🐸🍆",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs21.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😳", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }