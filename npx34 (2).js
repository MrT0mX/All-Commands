 const fs = require("fs");
module.exports.config = {
	name: "npx34",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx34",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😇")==0 || event.body.indexOf("nai")==0 || event.body.indexOf("নাই")==0 || event.body.indexOf("Nai")==0) {
		var msg = {
				body: "আমার কেউ নেই শিবলু বস ছাড়া তুমি আমার বন্ধু হয়ে যাও 👫",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx34.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("👫", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }