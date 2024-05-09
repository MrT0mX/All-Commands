const fs = require("fs");
module.exports.config = {
	name: "npx29",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx29v",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("👌")==0 || event.body.indexOf("👍🏻")==0 || event.body.indexOf("👍")==0 || event.body.indexOf("🤟")==0) {
		var msg = {
				body: "গ্রুপটি হাত মেরে নষ্ট করে দিলো বেয়াদব ছেলে মেয়ে💧",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx29.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💧", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }