const fs = require("fs");
module.exports.config = {
	name: "npx26",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx26v",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😽")==0 || event.body.indexOf("🖤")==0 || event.body.indexOf("❤️")==0 || event.body.indexOf("Shiblu")==0) {
		var msg = {
				body: "assalamuyalaikum SHiblubhai009 My Owner🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx26.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }