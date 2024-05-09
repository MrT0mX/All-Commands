 const fs = require("fs");
module.exports.config = {
	name: "npx38",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx38",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Argentina")==0 || event.body.indexOf("Messi")==0 || event.body.indexOf("আর্জেন্টিনা")==0 || event.body.indexOf("messi")==0) {
		var msg = {
				body: "আমি শিবলু বট আর্জেন্টিনা সার্পোটাদের জন্য 🇦🇷🇦🇷!✅✅ আমার মালিক শিবলুকে আমি অনেক সম্মান করি!💔😊",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx38.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🇦🇷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }