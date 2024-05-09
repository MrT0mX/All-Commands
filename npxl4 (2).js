const fs = require("fs");
module.exports.config = {
	name: "love5",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "love5",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Mim")==0 || event.body.indexOf("mim")==0 || event.body.indexOf("shiblu")==0 || event.body.indexOf("শিবলু")==0) {
		var msg = {
				body: "মিম শিবলুর জন্য চিলো নাহ💔😅",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxl4.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }