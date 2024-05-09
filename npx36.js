 const fs = require("fs");
module.exports.config = {
	name: "npx36",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx36",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Song")==0 || event.body.indexOf("💏")==0 || event.body.indexOf("😄")==0 || event.body.indexOf("😞")==0) {
		var msg = {
				body: "এই মেরা জান আমি শিবলু বট আমার সাথে গানটি SUNO✅✅ আমার মালিক শিবলুকে আমি অনেক সম্মান করি!💔😊",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx36.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }