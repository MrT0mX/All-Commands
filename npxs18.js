const fs = require("fs");
module.exports.config = {
	name: "npxs18",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs18",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😴")==0 || event.body.indexOf("😦")==0 || event.body.indexOf("😯")==0 || event.body.indexOf("😧")==0) {
		var msg = {
				body: "আহা সোনা গো আমার এমন করো কেনো? ঘুম পাইতেছে নাকি? তাহলে এসো আমার বুকে ঘুমাও🖤",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs18.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😴", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }tion({ api, event, client, __GLOBAL }) {

  }