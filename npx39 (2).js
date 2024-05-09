 const fs = require("fs");
module.exports.config = {
	name: "npx39",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx39",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ছেকা")==0 || event.body.indexOf("Dim")==0 || event.body.indexOf("🥳")==0 || event.body.indexOf("🥹")==0) {
		var msg = {
				body: "মিম শিবলুর জন্য চিলো নাহ পার্ট 1 দেখতে ইউজ শিবলু, Mim💔😊",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx39.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }