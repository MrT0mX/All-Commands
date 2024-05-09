const fs = require("fs");
module.exports.config = {
	name: "npxs42",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs42",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("👀")==0 || event.body.indexOf("🤥")==0 || event.body.indexOf("😶")==0 || event.body.indexOf("🤐")==0) {
		var msg = {
				body: "*প্রেমের অকাল মূত্যু নেই বলে শোকের মধ্যে প্রেম চিরন্তন হয়ে যায়। Same Voice USE >🤐😶🤥👀",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs42.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("👀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }