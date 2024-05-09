const fs = require("fs");
module.exports.config = {
	name: "npx24",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx24v",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😊")==0 || event.body.indexOf("🙂")==0 || event.body.indexOf("🙃")==0 || event.body.indexOf("😪")==0) {
		var msg = {
				body: "-SHibluBhai কে ভালোবাসে ফেলো 😊 🙂🙃 😪",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx24.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😪", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }