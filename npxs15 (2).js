const fs = require("fs");
module.exports.config = {
	name: "npxs15",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs15",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Shiblu")==0 || event.body.indexOf("শিবলু")==0 || event.body.indexOf("শিভলু")==0 || event.body.indexOf("SHiblu")==0) {
		var msg = {
				body: "বস শিবলুকে ডাকছেন কেন?  বস শিবলুর Profile Screenshot   I Love You যদি তুমি মেয়ে হও😽😽-!",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs15.jpg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }