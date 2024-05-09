const fs = require("fs");
module.exports.config = {
	name: "npxs66",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs66",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sahel")==0 || event.body.indexOf("sahel")==0 || event.body.indexOf("সাগেল")==0 || event.body.indexOf("সাহেল")==0) {
		var msg = {
				body: "-পা চাটা ক্রু সাহেল উর্ফে মামুন উর্ফে সোলাইমান খামকিরছেলে কে ধরিয়ে দিন ✅★Support Email:- MrTomXxX7@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs66.jpeg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }