 const fs = require("fs");
module.exports.config = {
	name: "npx42",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx42",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🥴")==0 || event.body.indexOf("😎")==0 || event.body.indexOf("😔")==0 || event.body.indexOf("🤭")==0) {
		var msg = {
				body: "যদিও ছিলো গল্পটা অল্প, তবুও তাকে সারা জীবন মনে রাখব🖤",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx42.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }