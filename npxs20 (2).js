const fs = require("fs");
module.exports.config = {
	name: "npxs20",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs20",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😏")==0 || event.body.indexOf("🙁")==0 || event.body.indexOf("😕")==0 || event.body.indexOf("☹️")==0) {
		var msg = {
				body: "এই তুমি মুখ ভেটকি মারো কেনো। এদিক ওদিক না তাকিয়ে আমাকে দেখো। আমি শিবলুর বট বলতাছি🐸",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs20.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }_GLOBAL }) {

  }